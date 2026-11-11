import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-layout flex-col items-start justify-center px-5 py-12 sm:px-8 lg:px-10" id="main-content" tabIndex={-1}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">404 · Page not found</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">That page isn’t here.</h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted">The address may be incorrect, or the page may have moved.</p>
      <Link className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark" to="/">Go to the home page</Link>
    </main>
  );
}
