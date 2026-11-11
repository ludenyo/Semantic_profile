import { Link, useNavigate } from "react-router-dom";
import { FORM_ACTIONS } from "../state/formState.js";
import { concepts } from "../data/concepts.js";

export default function ThankYouPage({ formData, dispatch }) {
  const navigate = useNavigate();
  const selectedConcept = concepts.find((concept) => concept.id === formData.interest);

  function startAgain() {
    dispatch({ type: FORM_ACTIONS.RESET_FORM });
    navigate("/form");
  }

  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-layout items-center px-5 py-12 sm:px-8 lg:px-10" id="main-content" tabIndex={-1}>
      <section className="mx-auto w-full max-w-2xl rounded-panel border border-line bg-white p-7 shadow-panel sm:p-10" aria-labelledby="thanks-title">
        <span className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-success/10 text-2xl text-success" aria-hidden="true">✓</span>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Feedback received</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl" id="thanks-title">
          Thank you{formData.fullName.trim() ? `, ${formData.fullName.trim()}` : ""}.
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          {selectedConcept
            ? `Your thoughts on ${selectedConcept.name} are ready. `
            : "Your feedback is ready. "}
          This classroom demo does not send or store your details.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="min-h-12 rounded-lg bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark" type="button" onClick={startAgain}>
            Send more feedback
          </button>
          <Link className="inline-flex min-h-12 items-center rounded-lg border border-line px-5 py-3 font-semibold text-ink hover:bg-cream" to="/">
            Back to concepts
          </Link>
        </div>
      </section>
    </main>
  );
}
