# 2. Serre's proof: reduction to the diagonal

This file proves M1–M4 in **equal characteristic**, following Serre
(*Local Algebra*, Chapter V), and explains what survives in mixed
characteristic.

## 2.1 The diagonal isomorphism

Assume $R = k[[x_1,\dots,x_n]]$, $k$ a field (see §1.1 for the reduction to
this case). Let

$$S \;=\; R \mathbin{\widehat\otimes}_k R \;\cong\; k[[x_1,\dots,x_n,\,y_1,\dots,y_n]],$$

a regular local ring of dimension $2n$, and let
$I_\Delta = (x_1 - y_1,\, \dots,\, x_n - y_n) \subset S$ be the **diagonal
ideal**. The elements $x_i - y_i$ extend to a regular system of parameters of
$S$, so they form a regular sequence of length $n$, and $S/I_\Delta \cong R$
via $x_i, y_i \mapsto x_i$.

**Lemma (reduction to the diagonal).** For finitely generated $R$-modules
$M, N$, set $T = M \mathbin{\widehat\otimes}_k N$, a finitely generated
$S$-module. Then for all $i$:

$$\operatorname{Tor}_i^R(M, N) \;\cong\; \operatorname{Tor}_i^S\big(T,\; S/I_\Delta\big).$$

*Proof.* Choose finite free resolutions $F_\bullet \to M$ and
$G_\bullet \to N$ over $R$. Because $k$ is a field, $-\widehat\otimes_k-$ is
exact on finitely generated modules, so
$F_\bullet \widehat\otimes_k G_\bullet$ is a finite free resolution of $T$
over $S$. Now

$$\big(F_\bullet \widehat\otimes_k G_\bullet\big) \otimes_S S/I_\Delta
\;\cong\; F_\bullet \otimes_R G_\bullet,$$

since restricting along the diagonal identifies the two copies of $R$. Taking
homology on the left computes $\operatorname{Tor}_\bullet^S(T, S/I_\Delta)$
(resolution of the first argument), and on the right computes
$\operatorname{Tor}_\bullet^R(M,N)$ (tensor product of a resolution of $M$
with a resolution of $N$ computes Tor). ∎

Since $S/I_\Delta$ is cut out by the regular sequence
$\underline z = (x_1-y_1, \dots, x_n-y_n)$, the Koszul complex
$K_\bullet(\underline z; S)$ resolves $S/I_\Delta$, hence

$$\operatorname{Tor}_i^R(M,N) \;\cong\; H_i\big(K_\bullet(\underline z;\, T)\big),
\qquad\text{so}\qquad
\chi(M,N) \;=\; \chi\big(K_\bullet(\underline z;\, T)\big).$$

## 2.2 Proof of M1–M4 in equal characteristic

Assume $\ell(M \otimes_R N) < \infty$. Note
$T/\underline z\, T \cong M \otimes_R N$ has finite length over $S$.

**M1 (dimension inequality).** $T$ is a finitely generated $S$-module with
$\ell(T/\underline z T) < \infty$ and $\underline z$ has $n$ elements, so
Krull's height theorem gives $\dim_S T \le n$. By §1.3,
$\dim_S T = \dim M + \dim N$. Hence $\dim M + \dim N \le n$. $\blacksquare$

**M2–M4.** Apply the Euler characteristic theorem of §1.2 to the Koszul complex
$K_\bullet(\underline z; T)$, with $r = n \ge \dim T$:

- If $\dim M + \dim N < n$, i.e. $\dim T < n$: $\quad\chi(M,N) = 0$. **(M3)**
- If $\dim M + \dim N = n$, i.e. $\dim T = n$:
  $\quad\chi(M,N) = e\big((\underline z); T\big) > 0$,
  a genuine Samuel multiplicity of a module of maximal dimension. **(M4)**
- In all cases $\chi(M,N) \ge 0$. **(M2)** $\blacksquare$

This also delivers the geometric meaning: for proper intersections on smooth
varieties, Serre's $\chi$ equals a Samuel multiplicity along the diagonal —
Bézout-type theorems follow with $\chi$ as the local intersection number.

## 2.3 Unramified mixed characteristic

Suppose $R = V[[x_1,\dots,x_{n-1}]]$ with $(V, pV, k)$ a complete unramified
DVR. Set $S = R \mathbin{\widehat\otimes}_V R \cong
V[[x_1,\dots,x_{n-1},y_1,\dots,y_{n-1}]]$, of dimension $2n - 1$, with diagonal
$S/I_\Delta \cong R$, $I_\Delta = (x_i - y_i)$ a regular sequence of length
$n-1$.

The complication: $\widehat\otimes_V$ is **not exact**, so
$F_\bullet \widehat\otimes_V G_\bullet$ need not be a resolution of
$M \widehat\otimes_V N$. But $V$ is a DVR, so
$\operatorname{Tor}^V_i$ vanishes for $i \ge 2$; the failure is controlled by a
single Tor term ($p$-torsion), and Serre handles it by a spectral sequence
argument (equivalently: treat separately the case $p$ annihilates one of the
modules, reducing to equal characteristic over $k$, and the case where both
modules are $V$-flat along a filtration). The outcome (*Local Algebra*, V.B.3):
M1–M4 all hold for unramified $R$, with the same Koszul/multiplicity mechanism.

## 2.4 Ramified mixed characteristic: what Serre could and couldn't do

If $R$ is complete ramified regular local of dimension $n$, write $R = A/(f)$
with $A = V[[x_1,\dots,x_n]]$ unramified regular of dimension $n+1$.
$R$-modules are $A$-modules, and applying the unramified theory over $A$ gives

$$\dim M + \dim N \le \dim A = n + 1.$$

That is off by one from the desired M1. Serre repairs M1 by a finer argument:
$M \widehat\otimes_V N$ is a module over
$C = A \widehat\otimes_V A$ on which **two** relevant ideals act — the diagonal
ideal and the single extra equation coming from $f \otimes 1 - 1 \otimes f
\in I_\Delta$ — and exploiting that this element already lies in the diagonal
ideal recovers the correct bound $\dim M + \dim N \le n$
(*Local Algebra*, V.B.4, Théorème 3). So **M1 holds for all regular local
rings** — this part is entirely Serre's.

The same trick does **not** repair M2–M4: passing to $A$ shifts the critical
dimension by one, so "proper intersection over $R$" becomes "improper over
$A$", where the Koszul Euler characteristic is $0$ — the method computes the
wrong invariant, losing all positivity information. This is exactly the gap
that remained from 1958 until the 1985/1995 breakthroughs (M3, M2), and that
still remains for M4.
