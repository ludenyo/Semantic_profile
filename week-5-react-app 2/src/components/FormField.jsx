export default function FormField({ id, label, error, hint, required = false, children }) {
  const feedbackId = `${id}-feedback`;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-ink" htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-danger" aria-hidden="true">*</span>}
      </label>
      {children}
      {(error || hint) && (
        <p
          className={`text-xs leading-relaxed ${error ? "text-danger" : "text-muted"}`}
          id={feedbackId}
          role={error ? "alert" : undefined}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
}
