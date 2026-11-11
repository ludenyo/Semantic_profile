import { Link, useParams } from "react-router-dom";
import { LogoLockup, LogoMark } from "../components/ConceptVisuals.jsx";
import { concepts } from "../data/concepts.js";

export default function ConceptDetailPage() {
  const { itemId } = useParams();
  const concept = concepts.find((item) => item.id === itemId);

  if (!concept) {
    return (
      <main className="mx-auto w-full max-w-layout px-5 py-16 sm:px-8 lg:px-10" id="main-content" tabIndex={-1}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Concept not found</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">We couldn’t find that logo direction.</h1>
        <Link className="mt-5 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4" to="/">Return to all concepts</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-layout px-5 py-10 sm:px-8 sm:py-14 lg:px-10" id="main-content" tabIndex={-1}>
      <Link className="inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4" to="/">← All concepts</Link>
      <section className="mt-6 grid items-center gap-8 rounded-panel border border-line bg-white p-6 shadow-panel sm:p-10 lg:grid-cols-2 lg:gap-12" aria-labelledby="concept-title">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Concept {concept.number}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl" id="concept-title">{concept.name}</h1>
          <p className="mt-4 leading-relaxed text-muted">{concept.description}</p>
          <Link className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark" to="/form">Give feedback on this concept</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid min-h-52 place-items-center rounded-2xl bg-cream p-4"><LogoMark concept={concept.id} className="h-36 w-36" /></div>
          <div className="grid min-h-52 place-items-center rounded-2xl bg-ink p-4"><LogoMark concept={concept.id} onDark className="h-36 w-36" /></div>
          <div className="grid min-h-36 place-items-center rounded-2xl border border-line p-4"><LogoLockup concept={concept.id} /></div>
          <div className="grid min-h-36 place-items-center rounded-2xl bg-ink p-4"><LogoLockup concept={concept.id} onDark /></div>
        </div>
      </section>
    </main>
  );
}
