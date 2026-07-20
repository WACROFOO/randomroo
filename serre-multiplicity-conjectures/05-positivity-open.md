# 5. Positivity (M4): the open conjecture

**Conjecture (Serre, 1958 — still open).** Let $R$ be a regular local ring,
$P, Q$ primes with $\ell(R/P \otimes_R R/Q) < \infty$ and
$\dim R/P + \dim R/Q = \dim R$. Then $\chi(R/P, R/Q) > 0$.

As of 2026 this has **no proof in general**. The open case is exactly:
$R$ complete, **ramified, mixed characteristic**. Everything else is Serre's
theorem (§2). This section records what *is* known.

## 5.1 Equivalent form after Gabber

Since nonnegativity (M2) is a theorem, positivity is equivalent to
**nonvanishing**:

> if $\dim R/P + \dim R/Q = \dim R$ then $\chi(R/P, R/Q) \neq 0$.

This is a genuine simplification of the problem's logical shape, but no proof
of nonvanishing is known either.

## 5.2 Cases and partial results that are theorems

1. **Equicharacteristic and unramified mixed characteristic** — Serre
   (§2.2–2.3).

2. **Cohen–Macaulay + Tor-independence mechanism.** If $R/P$ and $R/Q$ are
   both Cohen–Macaulay and $\operatorname{Tor}_i^R(R/P, R/Q) = 0$ for
   $i \ge 1$, then $\chi = \ell(R/(P+Q)) > 0$ trivially. More substantially,
   **Hochster's meta-theorem**: if the local rings involved admit **small
   (finitely generated) maximal Cohen–Macaulay modules**, positivity follows —
   one replaces $R/P$, $R/Q$ by MCM modules over them using additivity and a
   multiplicity computation. The existence of small MCM modules over complete
   local domains is itself a famous open conjecture (known in dimension
   $\le 2$, open in dimension $3$ even in char $p$).

3. **Two-dimensional base** — C. Skalit
   ([arXiv:1510.05146](https://arxiv.org/abs/1510.05146)): positivity holds for
   $A = R[[x_1, \dots, x_n]]$ a formal power series ring over a complete
   two-dimensional regular local base $R$ (and for smooth extensions of such
   bases). This covers a nontrivial sliver of ramified rings.

4. **Special contact conditions.** Various results of S. P. Dutta prove
   positivity (or nonvanishing) under extra hypotheses on the modules —
   finite projective dimension arguments, rigidity of Tor in the unramified
   case (Auslander, Lichtenbaum), and results on $\chi$ against modules of
   finite length and finite projective dimension. See Dutta,
   *On Serre Intersection Multiplicity Conjecture*
   ([arXiv:1507.03915](https://arxiv.org/abs/1507.03915)) and the survey
   literature.

5. **Hodge-theoretic reformulations** — see
   [arXiv:1404.2622](https://arxiv.org/abs/1404.2622) (*Serre Intersection
   Multiplicity Conjecture and Hodge theory*) for a reformulation of the
   equicharacteristic-0 mechanisms suggesting positivity structures; no
   mixed-characteristic consequence yet.

## 5.3 The current program: lim Cohen–Macaulay sequences

Bhatt–Hochster–Ma, *Lim Cohen-Macaulay sequences of modules*
([arXiv:2410.18372](https://arxiv.org/abs/2410.18372), 2024):

- They introduce **lim Cohen–Macaulay sequences** — sequences of modules that
  are asymptotically Cohen–Macaulay in a precise numerical sense — as a
  weakening of Hochster's small MCM modules that is still strong enough to run
  the positivity argument.
- They **prove such sequences exist in positive characteristic** (via Frobenius
  techniques), and show that **their existence in mixed characteristic would
  prove Serre's positivity conjecture for all regular local rings**.
- The perfectoid methods that resolved the direct summand conjecture
  (André, Bhatt 2016–18) produce *big* Cohen–Macaulay algebras, which suffice
  for many homological conjectures but — being non-finitely-generated — do
  **not** feed the multiplicity argument that positivity needs; lim CM
  sequences are designed to bridge exactly this gap.

This is, at present, the most plausible identified route to M4.

## 5.4 Why regularity is essential: Dutta–Hochster–McLaughlin

Over the hypersurface $R = k[[x,y,u,v]]/(xy - uv)$ (a 3-dimensional
complete intersection, not regular), Dutta, Hochster and McLaughlin
(*Modules of finite projective dimension with negative intersection
multiplicities*, Invent. Math. **79** (1985)) constructed a finite-length
module $M$ of **finite projective dimension** and a module $N$ of dimension 2
(so that $\dim M + \dim N \le \dim R$ and lengths are finite) with

$$\chi(M, N) = -1 < 0.$$

So both nonnegativity and positivity **fail** over non-regular rings even for
modules of finite projective dimension, and any proof of M4 must use
regularity in an essential, global way — as Roberts', Gillet–Soulé's and
Gabber's proofs all do.

## 5.5 Status summary

| Case | M4 status |
|------|-----------|
| $R \supseteq$ field | **Theorem** (Serre) |
| mixed char., unramified | **Theorem** (Serre) |
| mixed char., ramified, power series over 2-dim regular base | **Theorem** (Skalit) |
| mixed char., ramified, small MCM modules exist | **Theorem** (Hochster) — hypothesis itself open |
| mixed char., ramified, lim CM sequences exist | **Theorem** (Bhatt–Hochster–Ma) — hypothesis itself open |
| general | **OPEN** |
