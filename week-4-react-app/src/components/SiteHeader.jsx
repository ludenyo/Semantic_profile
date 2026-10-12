export default function SiteHeader({ isDarkMode, onThemeToggle }) {
  const nextTheme = isDarkMode ? "light" : "dark";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Northstar People home">
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" focusable="false">
            <path d="M16 2.5 19.2 12.8 29.5 16l-10.3 3.2L16 29.5l-3.2-10.3L2.5 16l10.3-3.2L16 2.5Z" />
            <circle cx="16" cy="16" r="3.1" />
          </svg>
        </span>
        <span className="brand__name">northstar<span> / people</span></span>
      </a>

      <div className="site-header__actions">
        <span className="workspace-label">
          <span className="workspace-label__dot" aria-hidden="true" />
          Workspace directory
        </span>
        <button
          className="theme-button"
          type="button"
          onClick={onThemeToggle}
          aria-pressed={isDarkMode}
          aria-label={`Switch to ${nextTheme} theme`}
        >
          <span className="theme-button__icon" aria-hidden="true">
            {isDarkMode ? "☼" : "☾"}
          </span>
          <span>{nextTheme} mode</span>
        </button>
      </div>
    </header>
  );
}
