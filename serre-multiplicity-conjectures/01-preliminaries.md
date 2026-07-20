# 1. Preliminaries: Koszul complexes and the Euler characteristic theorem

Everything in Serre's approach rests on one classical theorem relating Euler
characteristics of Koszul complexes to Samuel multiplicities. We record it here.

## 1.1 Finiteness of the definition

Let $(R,\mathfrak m)$ be regular local of dimension $n$. By the
Auslander–Buchsbaum–Serre theorem, $\operatorname{gl.dim} R = n < \infty$, so
$\operatorname{Tor}_i^R(M,N) = 0$ for $i > n$. If moreover
$\ell(M \otimes_R N) < \infty$, then every
$\operatorname{Tor}_i^R(M,N)$ has finite length, because its support is
contained in $\operatorname{Supp} M \cap \operatorname{Supp} N = \{\mathfrak m\}$.
Hence

$$\chi(M,N) = \sum_{i \ge 0} (-1)^i \,\ell\big(\operatorname{Tor}_i^R(M,N)\big) \in \mathbb Z$$

is well defined.

**Additivity.** If $0 \to M' \to M \to M'' \to 0$ is exact and both pairs
$(M', N)$, $(M'', N)$ satisfy the finite-length condition, the long exact
sequence of Tor gives $\chi(M,N) = \chi(M',N) + \chi(M'',N)$. Since every
finitely generated module has a filtration whose quotients are $R/\mathfrak p$
for primes $\mathfrak p \in \operatorname{Supp} M$, all four conjectures reduce
to the case of prime cyclic modules $R/P$, $R/Q$.

**Completion.** $\widehat R$ is faithfully flat over $R$ with
$\widehat{\mathfrak m}$-adic lengths matching, and
$\operatorname{Tor}_i^{\widehat R}(\widehat M, \widehat N) \cong
\operatorname{Tor}_i^R(M,N) \otimes_R \widehat R$. Dimensions are preserved.
So **we may and do assume $R$ is complete**, and then Cohen's structure theorem
applies:

- equicharacteristic: $R \cong k[[x_1,\dots,x_n]]$ for a field $k$;
- mixed characteristic **unramified** ($p \notin \mathfrak m^2$):
  $R \cong V[[x_1,\dots,x_{n-1}]]$ for a complete DVR $(V, pV)$;
- mixed characteristic **ramified**: $R \cong A/(f)$ where
  $A = V[[x_1,\dots,x_n]]$ is unramified regular of dimension $n+1$ and
  $f \in A$ is part of nothing nice — this one extra dimension is the source of
  all remaining difficulty.

## 1.2 Koszul complexes and multiplicity

Let $\underline x = x_1,\dots,x_r \in \mathfrak m$ and let $T$ be a finitely
generated $R$-module with $\ell\big(T/(\underline x)T\big) < \infty$. Write
$K_\bullet(\underline x; T)$ for the Koszul complex and

$$\chi\big(K_\bullet(\underline x; T)\big) = \sum_{i=0}^{r} (-1)^i\, \ell\big(H_i(\underline x; T)\big).$$

Recall the **Samuel multiplicity** of an ideal of definition $\mathfrak q$ on
$T$: for $t \gg 0$, $\ell(T/\mathfrak q^{t+1} T)$ is a polynomial in $t$ of
degree $d = \dim T$, and $e(\mathfrak q; T)$ is $d!$ times its leading
coefficient; it is a **positive integer** when $\dim T = d$ (and one sets
$e(\mathfrak q; T) = 0$ implicitly for lower-dimensional situations via the
convention below).

**Theorem (Auslander–Buchsbaum, Serre).** With notation as above, so that
necessarily $\dim T \le r$ by Krull's height theorem:

$$\chi\big(K_\bullet(\underline x; T)\big) \;=\;
\begin{cases}
e\big((\underline x); T\big) > 0 & \text{if } \dim T = r,\\[2pt]
0 & \text{if } \dim T < r.
\end{cases}$$

*Proof sketch.* Both sides are additive in $T$ along short exact sequences (long
exact sequence of Koszul homology on the left; associativity formula for
multiplicities on the right), so one reduces to $T = R/\mathfrak p$. Induct on
$r$: the Koszul complex $K_\bullet(x_1,\dots,x_r)$ is the mapping cone of
$x_r$ on $K_\bullet(x_1,\dots,x_{r-1})$, which yields
$\chi(K_\bullet(\underline x; T)) = \chi(K_\bullet(x_1,\dots,x_{r-1}; T/x_rT)) -
\chi(K_\bullet(x_1,\dots,x_{r-1}; \,{}_{x_r}T))$ where ${}_{x_r}T$ is the
$x_r$-torsion; comparing with the behaviour of Samuel multiplicity under passing
to $T/x_r T$ (Nagata's associativity/reduction formulas) gives the statement.
Full details: Serre, *Local Algebra*, IV.A, Théorème 1; or Auslander–Buchsbaum,
*Codimension and multiplicity*, Ann. of Math. **68** (1958). ∎

The two lines of this theorem are, in miniature, the entire quartet of
conjectures: nonnegativity, vanishing below the critical dimension, positivity
at the critical dimension. Serre's strategy is to convert $\chi(M,N)$ into the
Euler characteristic of a Koszul complex — that is what "reduction to the
diagonal" does — and it works precisely when the diagonal is cut out by a
regular sequence of the right length, which fails in ramified mixed
characteristic.

## 1.3 Dimension of tensor products over a field

The other ingredient (equal characteristic only): if $k$ is a field and $M, N$
are finitely generated over $k[[x_1,\dots,x_n]]$, then for the completed tensor
product

$$\dim \big(M \mathbin{\widehat\otimes}_k N\big) = \dim M + \dim N,$$

as a module over $k[[x_1,\dots,x_n,y_1,\dots,y_n]]$. This is proved by choosing
Noether normalizations of $M$ and $N$ and observing that
$M \widehat\otimes_k N$ is finite over the completed tensor product of the two
power series subrings. (Serre, *Local Algebra*, V.B.1.) Nothing like this holds
over a DVR base — $\widehat\otimes_V$ is not exact and can create $p$-torsion —
which is why mixed characteristic is genuinely harder.
