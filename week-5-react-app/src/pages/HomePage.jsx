import { Link } from "react-router-dom";
import { LogoLockup, LogoMark } from "../components/ConceptVisuals.jsx";
import { concepts, palette } from "../data/concepts.js";

function ConceptCard({ concept }) {
  return (
    <article className="rounded-panel border border-line bg-white p-5 shadow-panel sm:p-7 lg:p-8">
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
      <Link
        className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-dark"
        to={`/items/${concept.id}`}
      >
        Explore {concept.name}
      </Link>
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
        Mark components <span className="font-normal text-muted">(each concept shown on light and dark)</span>
      </h2>
      <div className="flex flex-wrap items-center gap-5 sm:gap-8">
        {marks.map((mark) => (
          <div className="grid h-24 w-24 place-items-center sm:h-28 sm:w-28" key={`${mark.concept}-${mark.onDark ? "light" : "dark"}`}>
            <LogoMark concept={mark.concept} onDark={mark.onDark} className="h-24 w-24 sm:h-28 sm:w-28" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-layout px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-[4.5rem]" id="main-content" tabIndex={-1}>
      <header className="mb-10 sm:mb-14">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal">Brand identity directions</p>
        <h1 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.2rem]">
          Kairos Spatial Solutions — logo concepts
        </h1>
        <p className="mt-3 max-w-3xl text-base text-muted sm:text-lg">
          Three directions pairing place — pins, contours, the globe — with kairos: the right moment.
        </p>
        <Link className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark" to="/form">
          Share your feedback <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-9" aria-label="Logo concept directions">
        {concepts.map((concept) => <ConceptCard key={concept.id} concept={concept} />)}
      </section>
      <PaletteSection />
      <MarkComponents />
    </main>
  );
}
