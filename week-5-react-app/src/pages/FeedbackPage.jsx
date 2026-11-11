import { Link, useNavigate } from "react-router-dom";
import InquiryForm from "../components/InquiryForm.jsx";
import { concepts } from "../data/concepts.js";

function FeedbackPreview({ formData }) {
  const selectedConcept = concepts.find((concept) => concept.id === formData.interest);

  return (
    <aside className="h-fit rounded-panel border border-line bg-white p-5 shadow-panel sm:p-6" aria-labelledby="preview-title">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Shared draft</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink" id="preview-title">Your feedback at a glance</h2>
      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-ink">Name</dt>
          <dd className="mt-1 text-muted">{formData.fullName.trim() || "Not added yet"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Preferred direction</dt>
          <dd className="mt-1 text-muted">{selectedConcept?.name || "Choose a logo direction"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">Feedback</dt>
          <dd className="mt-1 whitespace-pre-wrap text-muted">{formData.message.trim() || "Your notes will appear here as you type."}</dd>
        </div>
      </dl>
      <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
        This preview and the form below read the same draft held by the app.
      </p>
    </aside>
  );
}

export default function FeedbackPage({ formData, dispatch }) {
  const navigate = useNavigate();

  return (
    <main className="mx-auto w-full max-w-layout px-5 py-10 sm:px-8 sm:py-14 lg:px-10" id="main-content" tabIndex={-1}>
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal">Share your feedback</p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Which direction feels right?</h1>
        <p className="mt-3 text-base leading-relaxed text-muted">Choose a logo concept and tell us what works for your project.</p>
        <Link className="mt-3 inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4" to="/">
          Review all logo concepts
        </Link>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.8fr)] lg:gap-12">
        <InquiryForm formData={formData} dispatch={dispatch} onSuccess={() => navigate("/thank-you")} />
        <FeedbackPreview formData={formData} />
      </div>
    </main>
  );
}
