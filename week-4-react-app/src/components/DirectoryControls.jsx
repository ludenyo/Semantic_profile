export default function DirectoryControls({
  query,
  onQueryChange,
  teams,
  selectedTeam,
  onTeamChange,
}) {
  return (
    <div className="directory-controls">
      <label className="search-field">
        <span className="sr-only">Search people by name, role, team, location, or skill</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search people, roles, skills..."
        />
        {query && (
          <button
            className="search-field__clear"
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </label>

      <div className="team-filter" role="group" aria-label="Filter by team">
        {teams.map((team) => (
          <button
            className={`filter-chip${selectedTeam === team ? " filter-chip--active" : ""}`}
            type="button"
            key={team}
            aria-pressed={selectedTeam === team}
            onClick={() => onTeamChange(team)}
          >
            {team}
          </button>
        ))}
      </div>
    </div>
  );
}
