import { useState } from "react";
import FormField from "./FormField.jsx";

const initialFormData = {
  fullName: "",
  email: "",
  company: "",
  interest: "",
  contactMethod: "",
  message: "",
  agreeToTerms: false,
};

function validateForm(formData) {
  const errors = {};

  if (formData.fullName.trim().length < 2) {
    errors.fullName = "Enter your name (at least 2 characters).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.interest) {
    errors.interest = "Choose a logo direction.";
  }

  if (!formData.contactMethod) {
    errors.contactMethod = "Choose whether we may follow up.";
  }

  if (formData.message.trim().length < 20) {
    errors.message = "Add a little more detail (at least 20 characters).";
  }

  if (!formData.agreeToTerms) {
    errors.agreeToTerms = "Please confirm before sending your request.";
  }

  return errors;
}

const fieldClassName =
  "min-h-12 w-full rounded-lg border border-line bg-white px-3.5 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/15 disabled:cursor-not-allowed disabled:opacity-70";

function SuccessMessage({ name, onReset }) {
  return (
    <section
      className="rounded-xl border border-success/20 bg-success/5 p-6 sm:p-8"
      aria-live="polite"
      role="status"
    >
      <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-success/10 text-2xl text-success" aria-hidden="true">
        ✓
      </span>
      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
        Thanks, {name.trim()}.
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        Your feedback is ready. This classroom demo does not send or store your details.
      </p>
      <button
        className="mt-6 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        type="button"
        onClick={onReset}
      >
        Send more feedback
      </button>
    </section>
  );
}

export default function InquiryForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [touchedFields, setTouchedFields] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submissionState, setSubmissionState] = useState("idle");
  const errors = validateForm(formData);
  const isFormValid = Object.keys(errors).length === 0;
  const showError = (fieldName) =>
    submitAttempted || touchedFields[fieldName] ? errors[fieldName] : "";

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [name]: true,
    }));
    setSubmissionState("idle");
  }

  function markFieldTouched(event) {
    const { name } = event.target;
    if (!name) return;

    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [name]: true,
    }));
  }

  function resetForm() {
    setFormData(initialFormData);
    setTouchedFields({});
    setSubmitAttempted(false);
    setSubmissionState("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) return;

    setSubmissionState("submitting");

    try {
      // A short delay makes the submitting state visible in this frontend-only demo.
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  if (submissionState === "success") {
    return <SuccessMessage name={formData.fullName} onReset={resetForm} />;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {submissionState === "error" && (
        <p className="rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger" role="alert">
          Something went wrong. Please review your details and try again.
        </p>
      )}

      <fieldset className="space-y-5 border-0 p-0" disabled={submissionState === "submitting"}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="fullName" label="Full name" error={showError("fullName")} required>
            <input
              className={fieldClassName}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={markFieldTouched}
              aria-required="true"
              aria-invalid={Boolean(showError("fullName"))}
              aria-describedby={showError("fullName") ? "fullName-feedback" : undefined}
            />
          </FormField>

          <FormField id="email" label="Email address" error={showError("email")} required>
            <input
              className={fieldClassName}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={markFieldTouched}
              aria-required="true"
              aria-invalid={Boolean(showError("email"))}
              aria-describedby={showError("email") ? "email-feedback" : undefined}
            />
          </FormField>
        </div>

        <FormField id="company" label="Company or project" hint="Optional">
          <input
            className={fieldClassName}
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Where are you working?"
            value={formData.company}
            onChange={handleChange}
            onBlur={markFieldTouched}
          />
        </FormField>

        <FormField id="interest" label="Which logo direction do you prefer?" error={showError("interest")} required>
          <select
            className={fieldClassName}
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            onBlur={markFieldTouched}
            aria-required="true"
            aria-invalid={Boolean(showError("interest"))}
            aria-describedby={showError("interest") ? "interest-feedback" : undefined}
          >
            <option value="">Choose a direction</option>
            <option value="moment-pin">01 · Moment Pin</option>
            <option value="contour-k">02 · Contour K</option>
            <option value="horizon-globe">03 · Horizon Globe</option>
          </select>
        </FormField>

        <fieldset
          className="space-y-2 border-0 p-0"
          onBlur={markFieldTouched}
          aria-describedby={showError("contactMethod") ? "contactMethod-feedback" : undefined}
        >
          <legend className="mb-2 text-sm font-semibold text-ink">
            May we follow up about your feedback?<span className="ml-1 text-danger" aria-hidden="true">*</span>
          </legend>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              { value: "yes", label: "Yes, contact me" },
              { value: "no", label: "No follow-up needed" },
            ].map((method) => (
              <label className="inline-flex min-h-8 cursor-pointer items-center gap-2 text-sm text-ink" key={method.value}>
                <input
                  className="h-4 w-4 accent-brand focus:ring-brand"
                  type="radio"
                  name="contactMethod"
                  value={method.value}
                  checked={formData.contactMethod === method.value}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(showError("contactMethod"))}
                />
                {method.label}
              </label>
            ))}
          </div>
          {showError("contactMethod") && (
            <p className="text-xs text-danger" id="contactMethod-feedback" role="alert">
              {showError("contactMethod")}
            </p>
          )}
        </fieldset>

        <FormField id="message" label="What works well, and what would you change?" error={showError("message")} required>
          <textarea
            className={`${fieldClassName} min-h-28 resize-y`}
            id="message"
            name="message"
            rows="4"
            placeholder="Share what you like about the direction you chose..."
            value={formData.message}
            onChange={handleChange}
            onBlur={markFieldTouched}
            aria-required="true"
            aria-invalid={Boolean(showError("message"))}
            aria-describedby={showError("message") ? "message-feedback" : undefined}
          />
        </FormField>

        <div className="space-y-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted" htmlFor="agreeToTerms">
            <input
              className="mt-0.5 h-4 w-4 shrink-0 rounded accent-brand focus:ring-brand"
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              onBlur={markFieldTouched}
              aria-required="true"
              aria-invalid={Boolean(showError("agreeToTerms"))}
              aria-describedby={showError("agreeToTerms") ? "agreeToTerms-feedback" : undefined}
            />
            <span>I agree that Kairos Spatial Solutions may use this feedback to improve the brand identity.</span>
          </label>
          {showError("agreeToTerms") && (
            <p className="ml-7 text-xs text-danger" id="agreeToTerms-feedback" role="alert">
              {showError("agreeToTerms")}
            </p>
          )}
        </div>
      </fieldset>

      <div className="space-y-3 pt-1">
        <button
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-brand/50 disabled:shadow-none"
          type="submit"
          disabled={!isFormValid || submissionState === "submitting"}
        >
          {submissionState === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
              Submitting feedback...
            </>
          ) : (
            <>Submit feedback <span aria-hidden="true">→</span></>
          )}
        </button>
        {!isFormValid && (
          <p className="text-center text-xs text-muted">
            Complete the required fields to enable feedback submission.
          </p>
        )}
      </div>
    </form>
  );
}
