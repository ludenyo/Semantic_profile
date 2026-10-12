import { useState } from "react";
import DirectoryControls from "./components/DirectoryControls.jsx";
import DirectoryIntro from "./components/DirectoryIntro.jsx";
import EmptyState from "./components/EmptyState.jsx";
import PeopleGrid from "./components/PeopleGrid.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { people, teams } from "./data/people.js";

function personMatchesSearch(person, searchText) {
  const searchableDetails = [
    person.name,
    person.role,
    person.team,
    person.location,
    person.bio,
    ...person.skills,
  ]
    .join(" ")
    .toLocaleLowerCase();

  return searchableDetails.includes(searchText);
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const searchText = searchQuery.trim().toLocaleLowerCase();

  const visiblePeople = people.filter((person) => {
    const matchesTeam = selectedTeam === teams[0] || person.team === selectedTeam;
    return matchesTeam && personMatchesSearch(person, searchText);
  });
  const hasActiveFilters = searchQuery.length > 0 || selectedTeam !== teams[0];

  function clearFilters() {
    setSearchQuery("");
    setSelectedTeam(teams[0]);
  }

  return (
    <div className={`app-shell${isDarkMode ? " app-shell--dark" : ""}`}>
      <SiteHeader
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((currentMode) => !currentMode)}
      />

      <main className="page-container">
        <DirectoryIntro peopleCount={people.length} teamCount={teams.length - 1} />

        <section className="directory" aria-labelledby="directory-title">
          <div className="directory__heading">
            <div>
              <p className="eyebrow eyebrow--muted">THE WHOLE CREW</p>
              <h2 id="directory-title">Meet the team<span className="heading-period">.</span></h2>
            </div>
            <p className="directory__hint">Good people. Great work. No org chart required.</p>
          </div>

          <DirectoryControls
            query={searchQuery}
            onQueryChange={setSearchQuery}
            teams={teams}
            selectedTeam={selectedTeam}
            onTeamChange={setSelectedTeam}
          />

          <div className="results-summary" aria-live="polite">
            <p>
              Showing <strong>{visiblePeople.length}</strong> of {people.length} people
            </p>
            {hasActiveFilters && (
              <button className="text-button" type="button" onClick={clearFilters}>
                Reset filters <span aria-hidden="true">×</span>
              </button>
            )}
          </div>

          {visiblePeople.length > 0 ? (
            <PeopleGrid people={visiblePeople} />
          ) : (
            <EmptyState onReset={clearFilters} />
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p><span className="footer-mark" aria-hidden="true">✳</span> northstar / people</p>
        <p>A small directory for a big-hearted team.</p>
      </footer>
    </div>
  );
}
