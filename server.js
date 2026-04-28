const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');
const path = require('path');

const app = express();

const ROOT_DIR = __dirname;
const POSTS_DIR = path.join(ROOT_DIR, 'posts');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }
});

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'post';
}

function parseTags(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(item => String(item).trim()).filter(Boolean);
  return String(raw)
    .split(',')
    .map(item => item.trim())
    .filter(Boolean);
}

async function ensureStorage() {
  await fs.mkdir(POSTS_DIR, { recursive: true });
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { meta: {}, content: raw };
  }

  const yaml = match[1];
  const content = match[2];
  const meta = {};

  yaml.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
    meta[key] = value;
  });

  return { meta, content };
}

function firstNonEmptyLine(text) {
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .find(line => line.length > 0) || '';
}

async function loadPostsFromFiles() {
  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const mdFiles = entries.filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith('.md'));

  const posts = await Promise.all(
    mdFiles.map(async entry => {
      const fileName = entry.name;
      const absolutePath = path.join(POSTS_DIR, fileName);
      const raw = await fs.readFile(absolutePath, 'utf8');
      const stats = await fs.stat(absolutePath);
      const { meta, content } = parseFrontmatter(raw);

      const title = (meta.title || fileName.replace(/\.md$/i, '')).trim();
      const date = (meta.date || stats.mtime.toISOString().slice(0, 10)).trim();
      const tags = parseTags(meta.tags);
      const summary = (meta.summary || firstNonEmptyLine(content) || '').trim();

      return {
        slug: slugify(fileName.replace(/\.md$/i, '')),
        file: `posts/${fileName}`,
        title,
        date,
        uploadedAt: stats.mtime.toISOString(),
        tags,
        summary,
        mtime: stats.mtime.getTime()
      };
    })
  );

  posts.sort((a, b) => b.mtime - a.mtime);
  return posts.map(({ mtime, ...rest }) => rest);
}

app.use(express.static(ROOT_DIR));

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT_DIR, 'personal_blog_homepage_v_1.html'));
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await loadPostsFromFiles();
    res.json(posts);
  } catch (error) {
    res.status(500).send(`读取文章列表失败: ${error.message}`);
  }
});

app.get('/api/posts/:slug/content', async (req, res) => {
  try {
    const posts = await loadPostsFromFiles();
    const post = posts.find(item => item.slug === req.params.slug);

    if (!post) {
      res.status(404).send('文章不存在');
      return;
    }

    const absolutePath = path.join(ROOT_DIR, post.file);
    const raw = await fs.readFile(absolutePath, 'utf8');
    res.type('text/plain; charset=utf-8').send(raw);
  } catch (error) {
    res.status(500).send(`读取文章内容失败: ${error.message}`);
  }
});

app.get('/api/pdfs', async (req, res) => {
  try {
    const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
    const pdfFiles = entries.filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith('.pdf'));

    const pdfs = await Promise.all(
      pdfFiles.map(async entry => {
        const fileName = entry.name;
        const absolutePath = path.join(POSTS_DIR, fileName);
        const stats = await fs.stat(absolutePath);
        return {
          name: fileName,
          addedAt: stats.mtime.toISOString(),
          size: stats.size
        };
      })
    );

    pdfs.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    res.json(pdfs);
  } catch (error) {
    res.status(500).send(`读取PDF列表失败: ${error.message}`);
  }
});

app.get('/api/pdfs/:name/content', async (req, res) => {
  try {
    const fileName = decodeURIComponent(req.params.name);
    if (!fileName.toLowerCase().endsWith('.pdf')) {
      res.status(400).send('只支持PDF文件');
      return;
    }

    const absolutePath = path.join(POSTS_DIR, fileName);
    const fileStat = await fs.stat(absolutePath);
    if (!fileStat.isFile()) {
      res.status(404).send('文件不存在');
      return;
    }

    const data = await fs.readFile(absolutePath);
    res.type('application/pdf').send(data);
    } catch (error) {
      res.status(500).send(`读取PDF预览失败: ${error.message}`);
    }
  });

const PORT = process.env.PORT || 3000;

ensureStorage()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Blog server running at http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error(`初始化存储失败: ${error.message}`);
    process.exit(1);
  });
