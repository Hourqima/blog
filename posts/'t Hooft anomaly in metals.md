# 't Hooft anomaly in metals

Ref:
[1] https://arxiv.org/pdf/2502.19471 
 ’t Hooft anomalies in metals, Dominic V. Else

 本文只对以上文章中我感兴趣的部分做总结.

 ## Introduction to 't Hooft anomaly
"Anomaly并不是对量子场论哈密顿量的真正陈述。相反，它只是关于对称性如何作用于Hilbert空间的陈述。"

Anomaly可以体现在local density的对易子非零，以及添加背景场后破缺守恒方程上. 它可以通过一个离散的Abel群去分类：Anomaly始终是可以堆叠的，代表元因此是Abel的. (一定这样吗)

Anomaly同时限制了基态(包括spin和charge)都是gapless的, 这可以通过一个直观图像理解，如果体系具有一个小的gap，那么施加足够小的电场将对体系没有影响，亦即守恒方程并没有被破坏.

同时't Hooft anomaly与更高一维的SPT相具有一一对应的关系. 最终，'t Hooft anomaly表明一种将场论构建在d维晶格体系上，同时又满足对称群G与哈密顿量对易的障碍，但这种场论可以被构建在d+1维晶格体系的边界上.

##  ’t Hooft anomalies of emergent symmetries

当我们讨论't Hooft anomaly的时候，我们不一定要讨论哈密顿量的对称性，而是低能有效场论的对称性，此时涌现出的对称性被称为emergent symmetry.

Emergent symmetry是在大尺度场论下的对称性，因此哪怕我们具有一个emergent symmetry的anomaly, 我们仍然可以实现一个晶格版本的场论描述.

## Anomalies and bulk topological terms

我们使用拓扑项来对SPT相进行分类.

"想象一下，在d空间维度上，将一个处于SPT阶段的系统与背景规范场A耦合，以实现对称群G。由于SPT相位是有能隙的，我们可以积掉所有的动态场。那么，在作用中唯一剩下的项是一个涉及背景规范场A的项。一般来说，这将是拓扑的（即它在时空的微分同态下是不变的，不依赖于时空度量。）它在规范场的规范变换下也应该是不变的。通过对这些拓扑项进行分类，可以对SPT相进行分类。"

对于二维具有U(1)对称性的体系，SPT 分类给出 Integer Quantum Hall states, 对应拓扑项的形式为Chern Simons项. 这样体系的边界住着一个流不守恒的anomaly 场论，具体表现为整数化的量子电导.

## Loop group 作为 Fermi Liquid 的涌现对称性

本部分研究了Fermi surface的对称性, 我们不能对于每个点都谈论 U(1) 对称性，因为Fermi surface上的单独一个点是没有意义的. 我们只能研究定义在费米面上的总电荷，

$$Q = \int _{F} N(\theta) d \theta $$

其中N是某种分布函数.

同时对于regular的f，考虑如下函数,

$$  Q_f = \int_{F} f(\theta)N(\theta) d\theta $$

由于总电荷是整数，这使得如果 $\alpha f_1$ 与 $\alpha f_2$ 相差 $2\pi$ 的整数倍，那么 $\exp(i \alpha Q_{f_1}) = \exp(i \alpha Q_{f_2})$, 我们把 $\exp(i \alpha Q_{f})$ 视为一个从Fermi surface打到 U(1) 上的映射, 

$$  L_fU(1):=\{\text{regular functions} \ \ F \rightarrow U(1)\}$$

这就是Loop group的一个例子. 总之，我们已经确定了Fermi Liquid理论在d维上的涌现对称性：它是$L_F U(1)$，其中F是表示费米表面的（d-1）维流形。

## Loop group 的 anomaly

考虑2D情况，此时F就是 $S^1$ , 在附录中提到 d+1 维的 LU(1) SPT与 d+2 维的 U(1) SPT存在映射. (或许我之后会去看看怎么说的) 因此， 2D Loop group 的 anomaly 由 3D LU(1) SPT, 也就是 4D U(1) SPT 决定，而这给出 $\mathbb{Z}$ ，对应体系为 4D Quantum Hall.

这里作者尝试给 LU(1) 构建一个物理的规范场描述. 直接在 LU(1) 上构建规范场是困难的，这里的LU(1)规范场定义是在 $M\times S^1$上的 $U(1)$ 主丛, 因此具有M的分量 $A_\mu$ 和沿$S^1$的分量 $A_\theta$ .

此时的拓扑项为，

$$ S[A] = \frac{m}{24 \pi^2}\int_{M \times S^1}A \wedge dA\wedge dA $$

这是一个 5D Chern Simons term, 对应描述 4D Quantum Hall states. 同时规范场A 自然地进入流守恒方程的右侧，表明这描述一个anomaly. 整个流程如下,

$$ 2D\  LU(1) \text{anomaly} \rightarrow 3D\ LU(1) \text{SPT} \rightarrow \\4D\  U(1) SPT \rightarrow 5D\  \text{Chern Simons} $$

## Beyond Fermi liquids: compressibility and ersatz Fermi liquids

non Fermi liquid是不是也能用LU(1) anomaly去描述? 后者被称为ersatz Fermi liquid，目前还没有被证明.

一个直观的思路是，如果体系是gapless的，那么体系就可以具有无理数的填充，这对应着不紧的emergent symmetry group. 看起来无穷维的LU(1)是更物理的选择. 对于超流体系，可能与higher form symmetry相关.

如果考虑与boson的散射，那么整个体系的对称性将不是 LU(1) 而要求f 为常数或者奇函数，这是由boson 在P, T对称下性质为奇导致的. 

## Consequences of the emergent symmetry and anomaly

对于Fermi液体我们有如下的anomaly公式,它表现Fermi surface的局部电荷不守恒，

$$ \partial_\mu j^\mu(\theta) = \frac{1}{4\pi^2}\epsilon^{ij}E_i \partial_\theta k_j$$

$k(\theta)$是Fermi surface上某一点的动量，与上面的公式对应，可以得到m=1,

$$ \partial_\theta A_i -\partial_i A_{\theta} = \partial_\theta k_i $$

添加一个磁场，体系具有如下投影表示，

$$ U_{f} U_{g} U_{f}^\dagger U_{g}^\dagger = \exp(\frac{im\Phi}{(2\pi)^2}\int f(\theta)) g'(\theta)d\theta) $$

考虑平移算符，对应 $f,g$ 为 $k_x,k_y$ , 那么这个对比如下的公式，自然给出Luttinger定理.

$$ \mathbb{T}_x\mathbb{T}_y \mathbb{T}_y^\dagger \mathbb{T}_x ^\dagger = \exp(i\nu \Phi)$$

后面的一些应用大同小异，我在此略去.

##  Limitations and extensions

在非线性情况下, LU(1) 对称性是被破缺的.

奇异金属的线性电阻率无疑是破缺了 LU(1) 对称性, 一般描述涌现对称性是表现于体系会在RG下趋于一个不动点，在这个点上破缺涌现对称性的算符都是无关的. 这会给出 $T^{1+\epsilon}$ 的电阻率, 明显与奇异金属不一致.

但是对于这样的体系，Fermi surface直接给出一个尺度，这与RG不动点的scale invariance有一些矛盾. 因此这个意义下的emergent symmetry并不是良好定义的. 或许 LU(1) anomaly仍然能用于描述这样的体系.

关于Fermi surface anomaly的分类有一些争论，不过它们都认为分类的结果是 $\mathbb{Z}$.

当 U(1) 对称性被打破为 $\mathbb{Z}_2$ 时，体系的anomaly会从 $\mathbb{Z}$ 变成 $\mathbb{Z}_2$， 这表明spinless的体系具有 anomaly， 而两倍的体系，亦即spinful的情况则是没有anomaly的.

作者对FS anomaly等价于 0D SPT 做了一个直观性的说明，”考虑一个具有U(1)电荷守恒和晶格平移对称性的d空间维系统。想象一下，从绝缘体开始，在布里渊区成核一个非常小的费米表面，然后扩展费米表面，直到封闭的体积充满整个布里渊区。
在这一点上，我们有了另一个绝缘体，但它与我们开始使用的绝缘体不同：填充物（每单位电池的电荷）增加了1。我们可以将其视为堆叠一个受U(1)和晶格平移对称性保护的SPT。一般来说，对于任何内部对称G，在d空间维度上，受G和晶格平移对称保护的SPT与d=0中的G-SPT一一对应“

但这种anomaly不是一种't Hooft anomaly. 

后面的内容我没有继续写了，我对这个东西始终不是完全理解的。我知道一些 't Hooft anomaly的知识，我以为这是用anomaly来解释 Luttinger定理的违背，但看起来并不是这样，而且文中也没有提到如何破坏这个定理。有关Fermi surface anomaly我确实很不熟悉，以后有空我会看一些类似的文章。总而言之，这文章提供了一个很高的视角来看待问题。如果non-Fermi liquid都可以用ersatz Fermi liquid的思想去研究，或许在理解机制上也会取得突破.

我对这方面的内容确实不太熟悉，如果有事实性错误欢迎联系我.






