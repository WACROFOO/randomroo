# 3. Vanishing (M3): the theorems of Roberts and Gillet–Soulé (1985)

**Theorem.** Let $R$ be a regular local ring, $M, N$ finitely generated with
$\ell(M \otimes_R N) < \infty$ and $\dim M + \dim N < \dim R$. Then
$\chi(M,N) = 0$.

Proved independently and essentially simultaneously in 1985 by **Paul Roberts**
(via local Chern characters) and by **Henri Gillet and Christophe Soulé** (via
Adams operations on K-theory). Both proofs replace Serre's Koszul mechanism by
a global cohomological bookkeeping device that is insensitive to ramification.
We sketch both mechanisms; full details are in the references.

## 3.1 Common reformulation: perfect complexes with support

Let $F_\bullet \to M$ and $G_\bullet \to N$ be finite free resolutions. Then
$F_\bullet$ is a **perfect complex supported on** $\operatorname{Supp} M$,
similarly $G_\bullet$, and

$$\chi(M,N) = \chi\big(F_\bullet \otimes_R G_\bullet\big)
= \sum_i (-1)^i \ell\, H_i(F_\bullet \otimes_R G_\bullet),$$

a pairing of perfect complexes whose supports intersect only at the closed
point. Vanishing becomes a statement about this pairing when
$\dim \operatorname{Supp} F_\bullet + \dim \operatorname{Supp} G_\bullet < \dim R$.

## 3.2 Roberts: local Chern characters and Riemann–Roch

Roberts uses the **localized Chern character** of Baum–Fulton–MacPherson (as
developed in Fulton's *Intersection Theory*, Ch. 18): a perfect complex
$F_\bullet$ on $X = \operatorname{Spec} R$ with support $Z$ has

$$\operatorname{ch}^{Z}(F_\bullet) \in \bigoplus_j A^j\big(Z \subset X\big)_{\mathbb Q},$$

a bivariant class acting on Chow groups and landing in cycles on $Z$. The
local Riemann–Roch formula computes the Euler characteristic of the tensor
product as

$$\chi\big(F_\bullet \otimes G_\bullet\big)
= \deg\Big( \operatorname{ch}^{Z}(F_\bullet)\,
            \operatorname{ch}^{W}(G_\bullet) \cap \tau_X\big([X]\big) \Big)_0,$$

where $\tau_X$ is the Riemann–Roch transformation and the product of the two
localized classes is supported on $Z \cap W = \{\mathfrak m\}$, so only the
degree-$0$ (point) component contributes. Now count degrees:
$\operatorname{ch}^{Z}(F_\bullet)$ can only produce cycle classes of dimension
$\le \dim Z$, and likewise for $G_\bullet$; the term reaching dimension $0$
requires extracting a total codimension of $\dim X$ from
$\tau_X([X])$, whose top piece is $[X]$ in dimension $\dim X$. If
$\dim Z + \dim W < \dim X$, the pieces
$\operatorname{ch}_i \cdot \operatorname{ch}_j$ with
$i \le \dim Z$, $j \le \dim W$ cannot reach the required total degree against
the top component, and the potentially contributing lower components of
$\tau_X$ vanish **because $R$ is regular** (for a regular scheme,
$\tau_X([X])$ has no lower-dimensional correction terms in the relevant range —
this is where regularity is decisively used; the Dutta–Hochster–McLaughlin
example, §5.4, shows vanishing genuinely fails without it). Hence $\chi = 0$.

Roberts' 1985 announcement (*The vanishing of intersection multiplicities of
perfect complexes*, Bull. AMS **13**) covers the case where $R$ contains a field
or is essentially of finite type over a complete DVR — the cases where the
Chow/Riemann–Roch machinery was available — and the general complete (hence
all) regular local case follows from the machinery of local Chern characters
developed in full in his book *Multiplicities and Chern Classes in Local
Algebra* (Cambridge, 1998). His argument in fact proves vanishing whenever both
modules have finite projective dimension over a **complete intersection** —
strictly more than M3.

## 3.3 Gillet–Soulé: Adams operations with supports

Gillet and Soulé (*C. R. Acad. Sci. Paris* **300** (1985); full version
*Intersection theory using Adams operations*, Invent. Math. **90** (1987))
work in $K_0^Z(X)$, the Grothendieck group of perfect complexes on
$X = \operatorname{Spec} R$ with homology supported on $Z$. This group carries
**Adams operations** $\psi^k$ (built from the $\lambda$-ring structure via the
Dold–Kan / derived exterior power construction), compatible with the product

$$K_0^Z(X) \otimes K_0^W(X) \longrightarrow K_0^{Z \cap W}(X).$$

The key theorem is an eigenvalue bound: on $K_0^Z(X)_{\mathbb Q}$, the
operations $\psi^k$ are diagonalizable with eigenvalues $k^i$ where $i$ ranges
over $\operatorname{codim}(Z, X) \le i \le \dim X$. (The lower bound
$i \ge \operatorname{codim} Z$ is the hard part; the model case is a Koszul
complex on a regular sequence of length $c$, where $\psi^k$ acts by $k^c$.)

Now take $\alpha = [F_\bullet] \in K_0^Z(X)_\mathbb Q$ and
$\beta = [G_\bullet] \in K_0^W(X)_\mathbb Q$ with
$Z \cap W = \{\mathfrak m\}$. Decompose both into eigencomponents
$\alpha = \sum_{i \ge \operatorname{codim} Z} \alpha_{(i)}$,
$\beta = \sum_{j \ge \operatorname{codim} W} \beta_{(j)}$. The product
$\alpha_{(i)} \beta_{(j)}$ is a $\psi^k$-eigenvector of weight $k^{i+j}$ in
$K_0^{\{\mathfrak m\}}(X)_\mathbb Q \cong \mathbb Q$ (the isomorphism being
$\chi$), and on that group $\psi^k$ acts with the single eigenvalue $k^{\dim X}$
(again since $R$ is regular: the group is generated by the Koszul complex on a
full regular system of parameters). Therefore $\alpha_{(i)}\beta_{(j)} = 0$
unless $i + j = \dim X$. But the hypothesis
$\dim Z + \dim W < \dim X$ means
$\operatorname{codim} Z + \operatorname{codim} W > \dim X$, so **every** pair
in the sum has $i + j > \dim X$, forcing

$$\chi(M,N) = \chi(\alpha \cdot \beta) = \sum_{i+j > \dim X} \chi\big(\alpha_{(i)}\beta_{(j)}\big) = 0. \qquad\blacksquare$$

This proof works for every regular local ring, with no geometric hypotheses.

## 3.4 Remark

Both proofs establish vanishing but say nothing about the sign in the critical
case $i + j = \dim X$ — the weight/degree bookkeeping is blind to positivity.
That is why M4 did not fall with M3, and why fundamentally new inputs
(alterations for M2, and something still unknown for M4) were needed.
