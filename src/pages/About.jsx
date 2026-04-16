import CTASection from '../sections/CTASection'
import TimelineSection from '../sections/TimelineSection'
import ValuesSection from '../sections/ValuesSection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ownerImage from '../assets/owner-santhosh.png'
import { brand } from '../data/site'

// ─── Chapter data ────────────────────────────────────────────────────────────
const chapters = [
  {
    num: '01',
    year: 'April 13, 2024',
    title: 'The Pushcart Begins',
    body: (name) => (
      <>
        At just <strong>21 years old</strong>,{' '}
        <strong>{name}</strong> started the first Big Bites pushcart at{' '}
        <strong>Tiruvallur Oil Mill</strong> — not with capital or connections,
        but with courage, consistency, and a belief that the smallest beginning
        could grow into something extraordinary.
      </>
    ),
  },
  {
    num: '02',
    year: '2025',
    title: 'The Second Branch',
    body: () => (
      <>
        Big Bites expanded with its second pushcart branch on{' '}
        <strong>C.V. Naidu Road, opposite Ganga Sweets, Tiruvallur</strong>.
        This was not just expansion — it was proof that customer trust had
        started turning a local pushcart into a recognised name.
      </>
    ),
  },
  {
    num: '03',
    year: 'Oct 30, 2025 → Feb 2026',
    title: 'Franchise Era Begins',
    body: () => (
      <>
        The brand crossed its first boundary with the{' '}
        <strong>first franchise in Sriperumbudur</strong>. In{' '}
        <strong>January 2026</strong>, the second opened in Pattabiram,
        followed by the third in <strong>Uthukottai</strong> in February —
        three franchises in four months.
      </>
    ),
  },
  {
    num: '04',
    year: 'Mar–Apr 2026',
    title: 'Into a New State',
    body: () => (
      <>
        A third own branch opened in Tiruvallur, opposite LIC. And on{' '}
        <strong>April 11, 2026</strong>, Big Bites stepped into Andhra with
        its fourth franchise — the brand's{' '}
        <strong>first move beyond Tamil Nadu</strong>, at just{' '}
        <strong>23 years old</strong>.
      </>
    ),
  },
]

// ─── Premium Founder Story Section ───────────────────────────────────────────
function FounderStorySection() {
  return (
    <section className="fdr-root">

      {/* ── Background: seamlessly matches site's dark theme ── */}
      <div className="fdr-bg" aria-hidden="true">
        <div className="fdr-bg__vignette" />
        <div className="fdr-bg__orb fdr-bg__orb--a" />
        <div className="fdr-bg__orb fdr-bg__orb--b" />
        <div className="fdr-bg__orb fdr-bg__orb--c" />
        <div className="fdr-bg__lines" />
      </div>

      <div className="fdr-shell">

        {/* ══ Eyebrow ══ */}
        <Reveal>
          <div className="fdr-eyebrow">
            <span className="fdr-eyebrow__pill">Inspiring Founder Journey</span>
          </div>
        </Reveal>

        {/* ══ Mega headline ══ */}
        <Reveal delay={0.06}>
          <h2 className="fdr-mega">
            From a Young Founder's Dream
            <br />
            <span className="fdr-mega__accent">to a Growing Brand</span>
          </h2>
        </Reveal>

        {/* ══ Two-column body ══ */}
        <div className="fdr-layout">

          {/* Portrait column */}
          <Reveal direction="left" delay={0.1}>
            <div className="fdr-portrait-col">
              <div className="fdr-portrait-glow" aria-hidden="true" />
              <div className="fdr-portrait-ring" aria-hidden="true" />

              <div className="fdr-portrait-frame">
                <img
                  src={ownerImage}
                  alt={brand.ownerName}
                  className="fdr-portrait-img"
                />
                <div className="fdr-portrait-fade" aria-hidden="true" />
                <div className="fdr-portrait-ribbon">
                  <span className="fdr-portrait-ribbon__name">{brand.ownerName}</span>
                  <span className="fdr-portrait-ribbon__title">{brand.ownerTitle}</span>
                </div>
              </div>

              <div className="fdr-badge fdr-badge--tl">
                <span className="fdr-badge__val">13 Apr 2024</span>
                <span className="fdr-badge__lbl">Day One</span>
              </div>
              <div className="fdr-badge fdr-badge--br">
                <span className="fdr-badge__val">21 → 23</span>
                <span className="fdr-badge__lbl">Built at this age</span>
              </div>
            </div>
          </Reveal>

          {/* Story column */}
          <div className="fdr-story-col">

            <Reveal delay={0.14}>
              <blockquote className="fdr-pullquote">
                <span className="fdr-pullquote__ql" aria-hidden="true">"</span>
                At an age when many are still discovering their path,{' '}
                <em>{brand.ownerName} began building his.</em>
                <span className="fdr-pullquote__qr" aria-hidden="true">"</span>
              </blockquote>
            </Reveal>

            <div className="fdr-chapters">
              {chapters.map((ch, i) => (
                <Reveal key={ch.num} delay={0.18 + i * 0.07}>
                  <div className="fdr-chapter">
                    <div className="fdr-chapter__num">{ch.num}</div>
                    <div className="fdr-chapter__body">
                      <span className="fdr-chapter__year">{ch.year}</span>
                      <h3 className="fdr-chapter__title">{ch.title}</h3>
                      <p className="fdr-chapter__text">{ch.body(brand.ownerName)}</p>
                    </div>
                    <div className="fdr-chapter__accent" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>

        {/* ══ Closing banner ══ */}
        <Reveal delay={0.42}>
          <div className="fdr-closing">
            <p className="fdr-closing__text">
              The road was never easy. Building a street-side food business demanded
              resilience, consistency, and the ability to grow through daily operational
              challenges. But every challenge became part of the foundation. Today,{' '}
              <span className="fdr-closing__hi">{brand.ownerName}</span> stands as an
              inspiration to many youngsters — proving that{' '}
              <span className="fdr-closing__hi">
                age is never a limit when the vision is strong and the work is real.
              </span>
            </p>
          </div>
        </Reveal>

      </div>

      {/* ── Scoped CSS ── */}
      <style>{`
        /* Root — matches site bg-black/20 pattern */
        .fdr-root {
          position: relative;
          overflow: hidden;
          padding: 6rem 0 7rem;
          background: rgba(0,0,0,0.18);
        }

        /* ── Background ── */
        .fdr-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

        .fdr-bg__vignette {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 68% 48% at 50% 0%,   rgba(249,115,22,0.10) 0%, transparent 62%),
            radial-gradient(ellipse 48% 40% at 88% 78%,  rgba(249,115,22,0.07) 0%, transparent 58%),
            radial-gradient(ellipse 38% 34% at 8%  60%,  rgba(249,115,22,0.05) 0%, transparent 54%);
        }

        .fdr-bg__orb {
          position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5;
        }
        .fdr-bg__orb--a {
          width: 54vw; height: 54vw; top: -18%; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%);
        }
        .fdr-bg__orb--b {
          width: 33vw; height: 33vw; bottom: -4%; right: -4%;
          background: radial-gradient(circle, rgba(249,115,22,0.08), transparent 70%);
        }
        .fdr-bg__orb--c {
          width: 24vw; height: 24vw; top: 48%; left: -4%;
          background: radial-gradient(circle, rgba(249,115,22,0.06), transparent 70%);
        }

        .fdr-bg__lines {
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            rgba(249,115,22,0.025) 0px, rgba(249,115,22,0.025) 1px,
            transparent 1px, transparent 44px
          );
          mask-image: radial-gradient(ellipse 88% 66% at 50% 50%, black, transparent);
        }

        /* ── Shell ── */
        .fdr-shell {
          position: relative; z-index: 1;
          max-width: 1120px; margin: 0 auto;
          padding: 0 1.5rem;
          display: flex; flex-direction: column; gap: 3.5rem;
        }

        /* ── Eyebrow ── */
        .fdr-eyebrow { display: flex; justify-content: center; }
        .fdr-eyebrow__pill {
          display: inline-flex; align-items: center; gap: 0.65rem;
          padding: 0.45rem 1.4rem;
          border-radius: 999px;
          border: 1px solid rgba(249,115,22,0.22);
          background: rgba(249,115,22,0.10);
          font-size: 0.64rem; font-weight: 700;
          letter-spacing: 0.36em; text-transform: uppercase;
          color: #f97316;
        }
        .fdr-eyebrow__pill::before,
        .fdr-eyebrow__pill::after {
          content: ''; display: block;
          width: 1.5rem; height: 1px;
          background: #f97316; opacity: 0.55;
        }

        /* ── Mega headline ── */
        .fdr-mega {
          text-align: center;
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(2rem, 5.2vw, 3.9rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -0.025em;
          color: rgba(255,255,255,0.92);
          margin: 0;
        }
        .fdr-mega__accent {
          background: linear-gradient(125deg, #f97316 10%, #fb923c 55%, #fed7aa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; font-style: italic;
        }

        /* ── Two-column layout ── */
        .fdr-layout {
          display: grid;
          grid-template-columns: 1fr 1.28fr;
          gap: 4rem; align-items: start;
        }
        @media (max-width: 860px) {
          .fdr-layout { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* ── Portrait column ── */
        .fdr-portrait-col {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
        }
        .fdr-portrait-glow {
          position: absolute; top: 8%; left: 50%; transform: translateX(-50%);
          width: 115%; height: 115%;
          background: radial-gradient(circle at center, rgba(249,115,22,0.17) 0%, transparent 65%);
          filter: blur(38px); pointer-events: none; z-index: 0;
        }
        .fdr-portrait-ring {
          position: absolute; inset: -16px;
          border-radius: 38px;
          border: 1px solid rgba(249,115,22,0.15);
          pointer-events: none; z-index: 0;
          animation: fdr-ring 5s ease-in-out infinite;
        }
        @keyframes fdr-ring {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.016); }
        }

        .fdr-portrait-frame {
          position: relative; z-index: 1; width: 100%;
          border-radius: 30px; overflow: hidden;
          border: 1px solid rgba(249,115,22,0.22);
          box-shadow:
            0 0 0 5px rgba(249,115,22,0.05),
            0 30px 75px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .fdr-portrait-img {
          width: 100%; height: 30rem;
          object-fit: cover; object-position: top center;
          display: block;
          transition: transform 0.7s cubic-bezier(0.22,0.61,0.36,1);
        }
        .fdr-portrait-frame:hover .fdr-portrait-img { transform: scale(1.04); }

        .fdr-portrait-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 54%;
          background: linear-gradient(to top, rgba(3,3,10,0.92), transparent);
          pointer-events: none;
        }

        .fdr-portrait-ribbon {
          position: absolute; bottom: 1.4rem; left: 0; right: 0;
          text-align: center; z-index: 2;
        }
        .fdr-portrait-ribbon__name {
          display: block;
          font-family: var(--font-display, Georgia, serif);
          font-size: 1.3rem; font-weight: 900;
          color: #fff; letter-spacing: -0.01em;
        }
        .fdr-portrait-ribbon__title {
          display: block; font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #f97316; margin-top: 0.28rem;
        }

        /* Floating badges */
        .fdr-badge {
          position: absolute; z-index: 2;
          padding: 0.55rem 1rem; border-radius: 13px;
          border: 1px solid rgba(249,115,22,0.22);
          background: rgba(5,5,12,0.78); backdrop-filter: blur(16px);
          text-align: center; display: flex; flex-direction: column; gap: 0.12rem;
          box-shadow: 0 8px 26px rgba(0,0,0,0.45);
        }
        .fdr-badge--tl { top: 1.1rem; left: -1.3rem; }
        .fdr-badge--br { bottom: 5.2rem; right: -1.3rem; }
        @media (max-width: 560px) {
          .fdr-badge--tl { left: 0.4rem; }
          .fdr-badge--br { right: 0.4rem; }
        }
        .fdr-badge__val {
          font-family: var(--font-display, Georgia, serif);
          font-size: 0.95rem; font-weight: 900; color: #f97316;
        }
        .fdr-badge__lbl {
          font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.38);
        }

        /* ── Story column ── */
        .fdr-story-col { display: flex; flex-direction: column; gap: 2.4rem; }

        /* Pull quote */
        .fdr-pullquote {
          position: relative; margin: 0;
          padding: 1.9rem 2.1rem 1.9rem 2.5rem;
          border-radius: 22px;
          border: 1px solid rgba(249,115,22,0.14);
          background: linear-gradient(155deg, rgba(249,115,22,0.07) 0%, rgba(255,255,255,0.015) 100%);
          font-family: var(--font-display, Georgia, serif);
          font-size: clamp(1.1rem, 2.2vw, 1.42rem);
          font-weight: 700; line-height: 1.58;
          color: rgba(255,255,255,0.87);
        }
        .fdr-pullquote__ql,
        .fdr-pullquote__qr {
          position: absolute; font-family: Georgia, serif;
          font-size: 5.5rem; line-height: 1;
          color: rgba(249,115,22,0.10);
          pointer-events: none; user-select: none;
        }
        .fdr-pullquote__ql { top: -0.7rem; left: 0.5rem; }
        .fdr-pullquote__qr { bottom: -2.2rem; right: 0.7rem; }

        /* Chapter cards */
        .fdr-chapters { display: flex; flex-direction: column; gap: 0.85rem; }

        .fdr-chapter {
          position: relative;
          display: grid; grid-template-columns: 2.8rem 1fr;
          gap: 0 1.1rem;
          padding: 1.3rem 1.4rem;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .fdr-chapter:hover {
          border-color: rgba(249,115,22,0.28);
          transform: translateY(-3px);
          box-shadow: 0 18px 48px rgba(0,0,0,0.3);
        }

        /* Hover left accent bar */
        .fdr-chapter__accent {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(180deg, #f97316, rgba(249,115,22,0.18));
          border-radius: 3px 0 0 3px;
          opacity: 0; transform: scaleY(0.35); transform-origin: top;
          transition: opacity 0.3s, transform 0.35s;
        }
        .fdr-chapter:hover .fdr-chapter__accent { opacity: 1; transform: scaleY(1); }

        /* Hover glow overlay */
        .fdr-chapter::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at top right, rgba(249,115,22,0.07), transparent 50%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .fdr-chapter:hover::after { opacity: 1; }

        .fdr-chapter__num {
          font-family: var(--font-display, Georgia, serif);
          font-size: 1.8rem; font-weight: 900;
          color: rgba(249,115,22,0.2);
          line-height: 1; padding-top: 0.1rem;
          user-select: none; transition: color 0.3s;
        }
        .fdr-chapter:hover .fdr-chapter__num { color: rgba(249,115,22,0.52); }

        .fdr-chapter__body { display: flex; flex-direction: column; gap: 0.3rem; }

        .fdr-chapter__year {
          font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #f97316; opacity: 0.82;
        }
        .fdr-chapter__title {
          font-family: var(--font-display, Georgia, serif);
          font-size: 1.05rem; font-weight: 800;
          color: rgba(255,255,255,0.87); line-height: 1.3; margin: 0;
        }
        .fdr-chapter__text {
          font-size: 0.85rem; line-height: 1.82;
          color: rgba(255,255,255,0.50); margin: 0;
        }
        .fdr-chapter__text strong {
          color: rgba(255,255,255,0.80); font-weight: 700;
        }

        /* Closing banner */
        .fdr-closing {
          border-radius: 26px;
          border: 1px solid rgba(249,115,22,0.12);
          background: linear-gradient(130deg, rgba(249,115,22,0.06) 0%, rgba(255,255,255,0.015) 100%);
          padding: 2rem 2.4rem;
          text-align: center;
          max-width: 720px; margin: 0 auto; width: 100%;
        }
        .fdr-closing__text {
          font-size: 0.97rem; line-height: 1.95;
          color: rgba(255,255,255,0.55); margin: 0;
        }
        .fdr-closing__hi {
          color: rgba(255,255,255,0.82); font-weight: 700;
        }
      `}</style>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      <PageHero
        tag="Est. 2024 · Tiruvallur"
        title={
          <>
            The <em className="text-brand-orange">Story</em> of Big Bites
          </>
        }
        subtitle="From one pushcart in Tiruvallur to a growing network of own outlets and franchises, the Big Bites journey is built on courage, consistency, and belief."
      />

      {/* ── NEW: Premium founder story — replaces old bordered card ── */}
      <FounderStorySection />

      {/* ── UNTOUCHED: Our Journey / Milestones That Matter ── */}
      <TimelineSection />

      <section className="bg-black/20 py-24">
        <div className="container-shell max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-orange">
              <span className="h-px w-10 bg-brand-orange" />
              Founder&apos;s Note
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="mt-8 font-display text-3xl font-black leading-tight text-white/90 md:text-5xl">
              "Big Bites is proof that age is never a limit when the vision is strong and the
              work is consistent."
            </blockquote>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <img
                src={ownerImage}
                alt={brand.ownerName}
                className="h-14 w-14 rounded-full border border-brand-orange/20 object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-brand-text">{brand.ownerName}</div>
                <div className="text-sm text-brand-muted">
                  {brand.ownerTitle} · Tiruvallur, Tamil Nadu
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ValuesSection />

      <CTASection
        title={
          <>
            Be Part of the <span className="text-brand-orange">Story</span>
          </>
        }
        subtitle="Join the Big Bites franchise family and write your own chapter."
        buttonLabel="Start Franchise Journey"
      />
    </>
  )
}
