import { useId } from "react";
import InquiryForm from "./components/InquiryForm.jsx";

const concepts = [
  {
    id: "moment-pin",
    number: "01",
    name: "Moment Pin",
    description:
      "A map pin holding contour rings and a clock hand: the right place at the right moment. Most literal and easiest to read at small sizes (app icon, favicon).",
  },
  {
    id: "contour-k",
    number: "02",
    name: "Contour K",
    description:
      "A K monogram whose upper arm is drawn as contour lines, with an amber point marking the moment. Most ownable as a brand mark; pairs well with the wordmark.",
  },
  {
    id: "horizon-globe",
    number: "03",
    name: "Horizon Globe",
    description:
      "A gridded globe with the sun breaking the horizon — earth observation meets timing. Warmest of the three; suits the Academy and outreach work.",
  },
];

const palette = [
  { name: "Deep Navy", hex: "#0B2A3C", color: "bg-ink" },
  { name: "Survey Teal", hex: "#12807A", color: "bg-teal" },
  { name: "Contour Mint", hex: "#5CC2B8", color: "bg-mint" },
  { name: "Kairos Amber", hex: "#F2A93B", color: "bg-accent" },
  { name: "Map Cream", hex: "#F7F3EA", color: "bg-cream" },
];

function LogoMark({ concept, onDark = false, className = "h-24 w-24" }) {
  const colors = {
    navy: onDark ? "#F7F3EA" : "#0B2A3C",
    teal: "#12807A",
    mint: onDark ? "#5CC2B8" : "#5CC2B8",
    amber: "#F2A93B",
    cream: "#F7F3EA",
  };
  const clipId = useId().replaceAll(":", "");

  if (concept === "moment-pin") {
    return (
      <svg className={className} viewBox="0 0 100 110" role="img" aria-label="Moment Pin logo mark">
        <path d="M50 5C29 5 12 22 12 43c0 26 38 62 38 62s38-36 38-62C88 22 71 5 50 5Z" fill={colors.navy} />
        <circle cx="50" cy="42" r="23" fill="none" stroke={colors.mint} strokeWidth="3.5" />
        <circle cx="50" cy="42" r="16" fill="none" stroke={colors.teal} strokeWidth="3.5" />
        <path d="M50 42 66 26" fill="none" stroke={colors.amber} strokeLinecap="round" strokeWidth="5" />
        <circle cx="50" cy="42" r="7" fill={colors.amber} />
      </svg>
    );
  }

  if (concept === "contour-k") {
    return (
      <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Contour K logo mark">
        <path d="M20 14v72" fill="none" stroke={colors.navy} strokeWidth="12" strokeLinecap="round" />
        <path d="m40 48 29-31M43 49l31-32M46 51l32-31" fill="none" stroke={onDark ? "#F7F3EA" : "#89999D"} strokeWidth="4" strokeLinecap="round" />
        <path d="M40 50 77 84" fill="none" stroke={colors.teal} strokeWidth="12" strokeLinecap="round" />
        <circle cx="40" cy="50" r="7" fill={colors.amber} />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label="Horizon Globe logo mark">
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="35" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="35" fill={colors.navy} />
      <g clipPath={`url(#${clipId})`} fill="none" stroke={colors.mint} strokeWidth="2.5">
        <ellipse cx="50" cy="50" rx="17" ry="35" />
        <path d="M50 15v70M13 35h74M13 65h74" />
      </g>
      <path d="M15 50h70" stroke={colors.navy} strokeWidth="5" />
      <path d="M33 63a17 17 0 0 1 34 0" fill={colors.amber} />
    </svg>
  );
}

function LogoLockup({ concept, onDark = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${onDark ? "text-cream" : "text-ink"}`}>
      <LogoMark concept={concept} onDark={onDark} className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
      <div>
        <p className="font-sans text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-[2.65rem]">kairos</p>
        <p className="mt-2 text-[0.58rem] font-semibold tracking-[0.28em] text-teal sm:text-[0.65rem]">SPATIAL SOLUTIONS</p>
      </div>
    </div>
  );
}

function ConceptCard({ concept }) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-white p-5 sm:p-7 lg:p-8">
      <h2 className="mb-5 text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
        {concept.number} · {concept.name}
      </h2>

      <div className="mb-4 grid h-48 place-items-center rounded-2xl bg-cream sm:h-56">
        <LogoMark concept={concept.id} className="h-28 w-28 sm:h-32 sm:w-32" />
      </div>
      <div className="mb-4 grid h-48 place-items-center rounded-2xl bg-ink sm:h-56">
        <LogoMark concept={concept.id} onDark className="h-28 w-28 sm:h-32 sm:w-32" />
      </div>
      <div className="mb-4 grid h-28 place-items-center rounded-2xl border border-line px-3 sm:h-32">
        <LogoLockup concept={concept.id} />
      </div>
      <div className="mb-5 grid h-28 place-items-center rounded-2xl bg-ink px-3 sm:h-32">
        <LogoLockup concept={concept.id} onDark />
      </div>
      <p className="text-sm leading-[1.55] text-muted sm:text-[0.95rem]">{concept.description}</p>
    </article>
  );
}

function PaletteSection() {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="palette-title">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink" id="palette-title">Palette</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
        {palette.map((color) => (
          <div key={color.name}>
            <div className={`h-20 rounded-xl border border-line ${color.color}`} role="img" aria-label={`${color.name}, ${color.hex}`} />
            <p className="mt-2 text-sm font-medium text-ink">{color.name}</p>
            <p className="mt-1 text-sm text-muted">{color.hex}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MarkComponents() {
  const marks = [
    { concept: "moment-pin", onDark: false },
    { concept: "moment-pin", onDark: true },
    { concept: "contour-k", onDark: false },
    { concept: "contour-k", onDark: true },
    { concept: "horizon-globe", onDark: false },
    { concept: "horizon-globe", onDark: true },
  ];

  return (
    <section className="mt-12 sm:mt-14" aria-labelledby="marks-title">
      <h2 className="mb-5 text-xl font-semibold tracking-tight text-ink" id="marks-title">
        Mark components <span className="font-normal text-muted">(edit these — every instance updates)</span>
      </h2>
      <div className="flex flex-wrap items-center gap-5 sm:gap-8">
        {marks.map((mark, index) => (
          <div className="grid h-24 w-24 place-items-center sm:h-28 sm:w-28" key={`${mark.concept}-${mark.onDark ? "light" : "dark"}`}>
            <LogoMark concept={mark.concept} onDark={mark.onDark} className="h-24 w-24 sm:h-28 sm:w-28" />
            <span className="sr-only">Mark variation {index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <main className="mx-auto w-full max-w-layout px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-[4.5rem]" id="main-content">
        <header className="mb-10 sm:mb-14">
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.2rem]">
            Kairos Spatial Solutions — logo concepts
          </h1>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Three directions pairing place — pins, contours, the globe — with kairos: the right moment.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-9" aria-label="Logo concept directions">
          {concepts.map((concept) => <ConceptCard key={concept.id} concept={concept} />)}
        </section>

        <PaletteSection />
        <MarkComponents />

        <section className="mt-16 border-t border-line pt-10 sm:mt-20 sm:pt-14" aria-labelledby="form-title">
          <div className="mx-auto max-w-form">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal">Share your feedback</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl" id="form-title">
              Which direction feels right?
            </h2>
            <p className="mb-7 mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Choose a logo concept and tell us what you think.
            </p>
            <InquiryForm />
          </div>
        </section>
      </main>
      <footer className="border-t border-line px-5 py-5 text-center text-xs text-muted">
        Kairos Spatial Solutions · Logo concepts
      </footer>
    </div>
  );
}

export default App;
