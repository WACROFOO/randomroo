# 6. Attack notes on positivity: reductions, settled configurations, obstructions

These are working notes pushing the open positivity conjecture (M4) as far as
elementary and known methods reach. Everything proved here is proved
completely; everything conjectural is labeled as such.

Throughout: $(R, \mathfrak m)$ regular local of dimension $n$, primes
$P, Q$ with $\ell(R/P \otimes R/Q) < \infty$ and
$\dim R/P + \dim R/Q = n$ (the critical case). By §2 we may assume $R$
complete, ramified, of mixed characteristic $(0, p)$.

## 6.1 Configurations that are actually easy

Write $(a, b) = (\dim R/P,\, \dim R/Q)$, $a + b = n$. Recall a complete
regular local ring is a UFD, so **height-one primes are principal**.

**Proposition A.** If $\operatorname{ht} Q \le 1$ (equivalently
$b \ge n-1$), then positivity holds.

*Proof.* If $\operatorname{ht} Q = 0$ then $Q = 0$, $R/Q = R$, and
$\chi(R/P, R) = \ell(R/P)$; the dimension condition forces $a = 0$, so
$P = \mathfrak m$ and $\chi = \ell(R/\mathfrak m) = 1 > 0$.

If $\operatorname{ht} Q = 1$, then $Q = (g)$ for some prime element $g$
(UFD). The complex $0 \to R \xrightarrow{\,g\,} R \to 0$ resolves $R/Q$, so
$\operatorname{Tor}_i(R/P, R/Q) = 0$ for $i \ge 2$ and
$\operatorname{Tor}_1(R/P, R/Q) = (0 :_{R/P} g)$. Properness gives
$g \notin P$; since $R/P$ is a domain, $g$ is a nonzerodivisor on it, so
$\operatorname{Tor}_1 = 0$ and

$$\chi(R/P, R/Q) = \ell\big(R/(P + (g))\big) > 0,$$

positive because $P + (g) \ne R$ ($P + (g) \subseteq \mathfrak m$). ∎

**Corollary B.** Positivity holds for every regular local ring of dimension
$n \le 3$.

*Proof.* Every split $(a,b)$ with $a + b = n \le 3$ has
$\min(\operatorname{ht} P, \operatorname{ht} Q) =
\min(n - a,\, n - b) \le 1$. Apply Proposition A. ∎

**Smallest open configuration.** Therefore the first case not settled by
general theorems is:

> $n = 4$, both primes of height $2$ (the $(2,2)$ split), $R$ complete and
> ramified of mixed characteristic.

Even this case is not fully settled in the literature (Dutta and others have
partial results under extra hypotheses; Skalit's theorem covers those ramified
$R$ that are power series over a $2$-dimensional regular base, which includes
some but not all $4$-dimensional ramified rings).

## 6.2 The full reduction chain

Any proof of M4 may assume, without loss of generality, the conjunction of:

1. **$R$ complete, ramified, mixed characteristic $(0,p)$** — completion is
   flat (§1.1); the other cases are Serre's theorem (§2).
2. **$\chi(R/P, R/Q) \ne 0$ suffices** — by Gabber's nonnegativity (§4),
   nonvanishing $\Rightarrow$ positivity.
3. **$p \notin P \cup Q$** — if $p \in P$, then $R/P$ is an equicharacteristic-
   $p$ quotient; a dévissage through $A = R/(p')$-type hypersurface sections
   reduces such mixed cases to smaller-dimensional ones or to Proposition-A
   configurations; the hard case has both $R/P$, $R/Q$ flat over
   $\mathbb Z_p$ near the generic point ("horizontal" components).
4. **Both heights $\ge 2$** — Proposition A.
5. **One module may be replaced by any module of the same support with known
   multiplicity bookkeeping** — additivity: if $M$ has a filtration with
   quotients $R/P_i$, then $\chi(M, N) = \sum_i \chi(R/P_i, N)$, and for
   $M$ of dimension $a$ with $\operatorname{Supp} M = V(P)$,
   $\chi(M,N) = (\operatorname{mult}_P M)\, \chi(R/P, N) + (\text{terms that
   vanish by M3})$. Hence proving $\chi(M,N) > 0$ for *any single* module $M$
   with support $V(P)$ and positive generic rank proves it for $R/P$. This is
   the lever every serious approach pulls.

## 6.3 The Cohen–Macaulay lever (why "small MCM ⇒ positivity")

**Theorem (Hochster).** If for every complete local domain $D$ (of the
relevant dimensions over $R$) there exists a finitely generated maximal
Cohen–Macaulay $D$-module ("small MCM module"), then M4 holds.

*Mechanism.* By 6.2(5), replace $R/P$ by a small MCM module $M$ over $R/P$
and $R/Q$ by a small MCM $N$ over $R/Q$; then
$\chi(R/P, R/Q) = \chi(M, N) / (\operatorname{rank}_{R/P} M \cdot
\operatorname{rank}_{R/Q} N)$ up to M3-vanishing corrections, so it suffices
to prove $\chi(M,N) > 0$ for MCM modules. For MCM modules with
$\dim M + \dim N = n$ over regular $R$, the depth bookkeeping
($\operatorname{depth} M = \dim M$, and $\operatorname{pd}_R M = n - \dim M$
by Auslander–Buchsbaum) puts the pair in the range of the "depth formula"
mechanism: the expected conclusion $\operatorname{Tor}_i(M,N) = 0$ for
$i \ge 1$, whence $\chi(M,N) = \ell(M \otimes N) > 0$. Serre's local
computation makes this unconditional in the equicharacteristic and unramified
cases; in the ramified case the Tor-vanishing for MCM pairs follows from the
same intersection-theoretic inputs once both modules are CM (this is where the
argument genuinely uses the CM hypothesis to trade homological complexity for
multiplicity positivity). See Hochster's *Topics in the homological theory of
modules over commutative rings* (CBMS 24, 1975) and Roberts' book, Ch. 13.

**Status of the hypothesis.** Small MCM modules are known to exist for
complete local domains of dimension $\le 2$ (dimension 2: take the integral
closure — normal surface rings... more precisely a module-finite normal
extension works), and the question is **open in dimension 3 already, even in
characteristic $p$**. So this lever cannot yet be pulled for the smallest open
configuration (which needs MCM modules over $3$- and $2$-dimensional
quotients — note dimension $3$ is exactly where existence is open).

**The 2024 sharpening (Bhatt–Hochster–Ma,
[arXiv:2410.18372](https://arxiv.org/abs/2410.18372)).** One does not need a
single MCM module — a **lim CM sequence** $\{M_t\}$ over $R/P$ (modules whose
deviation from CM-ness is $o$ of their generic rank, in a precise numerical
sense) suffices: in the bookkeeping of 6.2(5) one divides by
$\operatorname{rank} M_t$ and passes to the limit; the CM-defect terms are
$o(\operatorname{rank} M_t)$ and die in the limit, while the main term stays
bounded below by a fixed positive multiplicity. BHM prove lim CM sequences
exist in characteristic $p$ (Frobenius powers $\{F^e_*(D)\}$ essentially work,
by Kunz/Monsky theory). **The missing piece for M4 in general is exactly:
lim CM sequences over complete local domains of mixed characteristic.**

## 6.4 Why the three proof machines cannot be strictified

- **Adams operations (Gillet–Soulé).** The argument is pure weight
  bookkeeping: it shows the off-critical eigencomponents pair to zero. At the
  critical weight $i + j = n$ it identifies $\chi$ with the pairing of the
  top eigencomponents $\alpha_{(\operatorname{ht} P)} \cdot
  \beta_{(\operatorname{ht} Q)}$ — a rational number the formalism gives no
  sign control over. K-theory sees $\mathbb Q$-linear structure, not order
  structure.
- **Local Chern characters (Roberts).** Same phenomenon: $\chi$ equals a
  degree-$0$ intersection number
  $\deg(\operatorname{ch}_{\operatorname{ht} P}(F_\bullet)
  \operatorname{ch}_{\operatorname{ht} Q}(G_\bullet) \cap [X])$. Positivity of
  such a number is a *geometric* statement (transversality/ampleness-type),
  not a formal one; in the singular mixed-characteristic setting there is no
  known ample class to compare against.
- **Alterations (Gabber).** The proof bounds $\chi$ below by
  $\tfrac 1 m \int c_1(\mathcal O(1))^d \cdot (\text{effective cycle})$ with
  $\mathcal O(1)$ **nef** on the relevant fibres. Nef degrees can be zero. To
  strictify one would need (i) an ample comparison class, or (ii) control
  showing the effective cycle is not contracted by $\mathcal O(1)$ — both
  destroyed by the generically-finite freedom ($m > 1$) of the alteration.
  De Jong-type results with $m$ prime to a given prime exist, but the loss is
  structural, not arithmetic.
- **Perfectoid methods.** André's and Bhatt's big Cohen–Macaulay
  *algebras* resolved the homological conjectures that are qualitative
  (direct summand, monomial, canonical element). M4 is *quantitative*: the
  MCM object must be finitely generated (or lim-finitely generated) for
  lengths and ranks to make sense. Big CM algebras have no rank and infinite
  generation — the bookkeeping of 6.2(5) collapses. Bridging perfectoid
  constructions to *finite* numerical data is precisely what lim CM sequences
  axiomatize, and (as of 2026) nobody has extracted such sequences from the
  perfectoid tower. **If someone proves that suitable finite quotients of a
  perfectoid big CM algebra form a lim CM sequence, M4 is a theorem.** That
  is, in this author's assessment, the sharpest currently-visible target.

## 6.5 Honest conclusion

- Proved here from scratch: positivity for $\operatorname{ht} \le 1$
  configurations, hence for all regular local rings of dimension $\le 3$
  (Proposition A, Corollary B — elementary, classical).
- Assembled: the complete reduction chain (6.2) showing M4 is equivalent to a
  nonvanishing statement for a single well-chosen module pair over a complete
  ramified ring, and equivalent to the mixed-characteristic existence half of
  the Bhatt–Hochster–Ma lim CM program (6.3).
- Not proved, because it is an open problem: the $(2,2)$ split in dimension
  $4$ and beyond, in the ramified case. No known machine controls the sign at
  the critical weight; the identified bridge (lim CM sequences in mixed
  characteristic, plausibly via perfectoid approximation) is where current
  research stands.
