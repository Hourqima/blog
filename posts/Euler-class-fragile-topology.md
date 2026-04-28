# Euler数与脆拓扑

Ref: 
[1] Phys. Rev. X 9, 021013 Failure of Nielsen-Ninomiya Theorem and Fragile Topology in Two-Dimensional Systems with Space-Time Inversion Symmetry: Application to Twisted Bilayer Graphene at Magic Angle

省流：PT 对称二能带体系可以用Euler class进行拓扑分类，此时不平凡的体系具有Wannier obstruction. 更多能带的情况用second Stiefel-Whitney class分类且具有关系$w_2 =e_2(mod2)$, 虽然不具有Wannier obstruction但具有非平凡的边界态.



当spinless体系具有PT对称性时，一般的Chern number被限制为0，本文提出了用Euler数去分类的一种方法。具有Euler class $e_2$的二带体系具有Wannier obstruction, 同时必定会有band crossing产生一个winding number为$-2e_2$的vortex，从而破缺了Nielson-Ninomiya定理.

当体系中有更多被占据能带时，使用 second Stiefel-Whitney class $w_2$ 去对体系分类，它的大小为 $w_2 = e_2 \ (mod2)$, 也就是说二带的非平庸系统在添加新的能带后，可能变成一个平庸或不平庸的体系.

## Euler class 的引入

PT对称性算符$I_{ST}$满足 $I_{ST}^2 = 1$ ,选取实规范 $I_{ST}\ket{\psi_{nk}} = \ket{\psi_{nk}}$, Euler class定义如下,

$$ e_2 = \frac{1}{2\pi}\oint_{BZ} \bold{dS} \cdot \bold{F} $$

其中 $\bold{F}_{mn} = \nabla_{k} \times \bold{A}_{mn}, \bold{A}_{mn} = \bra{u_m}\nabla_{k}\ket{u_n}$，在此不多赘述，容易看出Euler class定义在orientable real state上，作用一个 $SO(2)$ 后不变，作用一个反向的 $O(2)$ 操作后增加一个负号.

一个更为直观的理解是将 BZ 放在一个圆球上，南北半球的规范各不相同，在赤道处通过一个转移函数相连接，而 Euler class 描述的就是转移函数的winding number. 这有点类似磁单极子的argument.

## Wannier obstruction

实际上和Chern的情况是类似的，拓扑在某种意义上是一种定义全局性的obstruction，这与复线丛还是实线丛的关系不大. 无法定义全局的规范，这使得bloch函数不能是光滑的，Fourier变换后的Wannier函数不能是指数局域的. 原文的想法我觉得核心和我说的是类似的.

## Failure of Nielson Ninomiya theorem

如果PT不变的二带模型参数在整个布里渊区内连续定义，且两个能带远离其他的能带，我们有2D情况的Nielson Ninomiya定理，体系的winding number恒定为0.

而对于不连续定义的参数，使用Euler class可以看到赤道会有贡献，最终的结论是Euler class是 winding number的一半. 数学上表现为Poincare-Hopf定理. 这也意味着体系可以具有winding number相同的vortex.

剩下的一些部分我不太感兴趣，跳过.

## 脆拓扑与高阶拓扑

在添加新的能带后，体系用second Stiefel-Whitney class描述，对应 $w_2 = e_2 (mod2)$. 但是nontrivial的 $w_2$ 不会在两带以上的体系产生Wannier obstruction, 但是这时可以产生anomalous coner states.

在Fig6中展示了vortice配对消失的过程，这使得每个能带都有x,y方向两个拓扑数，分别为$(0,\pi),(\pi,\pi),(\pi,0)$. 由于体系没有vortex所以没有obstruction，但是体系局域非零的second Stiefel-Whitney class.

而这种Stiefel-Whitney insulator表现出corner state. 对于w=1的Stiefel-Whitney insulator, 可以考虑两个c=1,-1的QAHI拼在一起,它们由 $I_{ST}$ 互相连接. 添加两个PT对称的质量项，那么$m_{1,2}(\theta)$必须奇函数, 体系在圆周上有$4N_{1,2}+2$个零点. 如果考虑chiral symmetry，那么只有一个mode非零，体系就在这个mode质量为零的地方出现robust的corner state. 这是直接与chiral symmetry与second Stiefel-Whitney class相关的，因为这个时候体系的wannier center由每条能带的berry phase决定，而chiral symmetry保证了边界态的出现. 

很多内容我不是很感兴趣所以跳过了.





