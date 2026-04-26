# 四元数与能带拓扑

本文记录一些Nonabelian band topology的相关笔记

[1] QuanSheng Wu et al.,Non-Abelian band topology in noninteracting metals.Science365,1273-1277(2019)

在考虑NonAbelian的能带拓扑时，我们可以对nodal line引入topological charge，自然它们应该是nonAbelian的。[1]研究了具有PT对称性的无相互作用弱SOC体系，并用topological charge去研究能带的nodal line。文中给出的模型为：

$$ H = h_0 + \mathbf{h} \cdot \boldsymbol{\sigma}$$
在PT对称性下，Hamiltonian必须是实矩阵，我们可知 $h_y=0$。当$h_x(k)=0,h_z(k)=0$的时候体系出现nodal line.

为了研究其拓扑性质，我们考虑最低能带上一个非nodal line的态$\ket{u_k^O}$，然后把哈密顿量的本征态全部归为$\pm1$. 这时候我们的哈密顿量就是一个投影矩阵

$$ H = 1 - 2 \ket{u_k^O}\bra{u_k^O} $$

这时候我们的态矢量是一个归一化的二分量矩阵，所以它生活在$S^1$上，拓扑数由基本群$\pi_1(S^1)=\mathbb{Z}$给出.我们的nodal line本质上由几个曲面的截线描述：$h_x(k)=0, h_z(k) = 0$.

接下来考虑多能带的情况，设置哈密顿量：

$$ H = \begin{pmatrix}
E_0 &t k_x & t k_z \\
t k_x & k_y  & k_x  k_z \\
t k_z & k_x k_z & -k_y\\
\end{pmatrix} $$

这个形式本质上来自于先前二带模型在crossing point附近的展开。通过改变$E_0$的符号，我们发现最下面两条能带的nodal line从相互缠绕到互相分离, 同时crossing point从下面两条能带转移到上面两条能带，这是超越十重分类的一个结果。（或许我之后应该写一点十重分类，毕竟我也忘了）

此时我们选择用本征矢来研究体系，显然本征矢可以拼成一个转移矩阵，可以用来正交对角化哈密顿矩阵，同时本征矢可以翻转$\pi$的相位，使得我们的parameter space是 $SO(N)$ 商掉偶数个$\pi$相位的翻转。翻转$\pi$相位是实矩阵的限制，而翻转偶数次才能使矩阵仍然落在 $SO(N)$ 不是 $O(N)$.

考虑三带系统，体系的拓扑性质由基本群决定, 而$\pi_1(SO(3)/D_2)$正好给出四元数群$Q$.

对四元数群进行共轭分解可以得到五个共轭类 $\{1\}, \{\pm i\},\{\pm j\},\{\pm k\},\{-1\}$ .它们可以被赋值在一个环路上，$\{\pm i\}$描述环路包含上面两个能带的NL，$\{ \pm k\}$描述环路包含下面两个能带的NL，$\{\pm j\}$描述两个NL都被包含一次，$\{-1\}$描述包含两种相同类型的NL.对于非平凡的拓扑值，我们不能让两个nodal line互相穿过. 原文给出了一个非平凡很有趣的例子, 在此不多赘述.

到此我觉得已经大致阐述本文的精神。对于nodal line的研究，本质上是一些曲面的相交曲线的研究，只是在这个情况下基本群正好给出nonAbelian的四元数群. 而转化为纯粹的相交曲线研究，或许是一个很纯粹数学的领域.


