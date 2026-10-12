export default function EmptyState({ onReset }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon" aria-hidden="true">⌕</span>
      <h3>No teammates found</h3>
      <p>Try another name, skill, or team. Your people are here somewhere.</p>
      <button className="text-button" type="button" onClick={onReset}>
        Clear filters
      </button>
    </div>
  );
}
