# Serre's Multiplicity Conjectures — statements, proofs, and status

This folder collects precise statements of Serre's multiplicity conjectures and
writes up the proofs of the parts that are theorems, with references. It is a
mathematical survey document, not original research.

## Setup

Let $(R, \mathfrak m)$ be a Noetherian **regular** local ring of Krull dimension
$n$, and let $M, N$ be finitely generated $R$-modules such that
$M \otimes_R N$ has finite length (equivalently,
$\operatorname{Supp} M \cap \operatorname{Supp} N = \{\mathfrak m\}$).
Since $R$ is regular, it has finite global dimension $n$, so the definition

$$\chi(M, N) \;=\; \sum_{i=0}^{n} (-1)^i \, \ell_R\!\left(\operatorname{Tor}_i^R(M, N)\right)$$

is a finite sum of finite lengths. This is **Serre's intersection multiplicity**
(Serre, *Algèbre locale · Multiplicités*, 1957/58 lectures; English edition
*Local Algebra*, Springer, 2000). When $R$ is the local ring of a smooth variety
at a point where two subvarieties $V(P)$, $V(Q)$ meet properly, $\chi(R/P, R/Q)$
is the correct local intersection number of intersection theory — this was
Serre's motivation.

By additivity of $\chi$ in each argument and dévissage through prime filtrations,
all statements below reduce to the case $M = R/P$, $N = R/Q$ with $P, Q$ prime.

## The four statements

| # | Statement | Status |
|---|-----------|--------|
| M1 | **Dimension inequality:** $\dim M + \dim N \le n$ | **Theorem** (Serre, all regular local rings) |
| M2 | **Nonnegativity:** $\chi(M,N) \ge 0$ | **Theorem** (Gabber, c. 1995) |
| M3 | **Vanishing:** if $\dim M + \dim N < n$ then $\chi(M,N) = 0$ | **Theorem** (Roberts 1985; Gillet–Soulé 1985, independently) |
| M4 | **Positivity:** if $\dim M + \dim N = n$ then $\chi(M,N) > 0$ | **OPEN** in general (as of 2026) |

Serre himself proved **all four** statements when $R$ is equicharacteristic
(contains a field) or unramified of mixed characteristic, by his *reduction to
the diagonal*. The only case ever in doubt is the **ramified mixed
characteristic** case, where M2 and M3 were settled decades later and M4 remains
one of the major open problems of commutative algebra.

## Contents of this folder

- [`01-preliminaries.md`](01-preliminaries.md) — Koszul complexes, Samuel
  multiplicity, and the Euler characteristic theorem that powers everything.
- [`02-equal-characteristic.md`](02-equal-characteristic.md) — Serre's complete
  proof of M1–M4 in equal characteristic via reduction to the diagonal, plus
  what happens in the unramified and ramified mixed characteristic cases.
- [`03-vanishing.md`](03-vanishing.md) — the two independent 1985 proofs of
  vanishing: Roberts (local Chern characters / Riemann–Roch) and Gillet–Soulé
  (Adams operations on K-theory with supports).
- [`04-nonnegativity-gabber.md`](04-nonnegativity-gabber.md) — Gabber's proof of
  nonnegativity via de Jong's alterations.
- [`05-positivity-open.md`](05-positivity-open.md) — the open positivity
  conjecture: known partial results, reductions, and current programs.
- [`REFERENCES.md`](REFERENCES.md) — full bibliography.

## Honest summary

There is **no complete proof of the positivity conjecture (M4)** in the
mathematical literature: it is open in the ramified mixed characteristic case.
This document therefore contains proofs of M1, M2, M3 (and of M4 in the
equicharacteristic and unramified cases, where it is a theorem of Serre),
together with a survey of the strongest known partial results toward M4.
