export default function DirectoryIntro({ peopleCount, teamCount }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span>PEOPLE DIRECTORY</span><span>·</span><span>2026</span></p>
        <h1 id="hero-title">Find your people.<br /><em>Make good things.</em></h1>
        <p className="hero__description">
          A little place to meet the people behind the work. Search by name,
          explore a team, and say hello.
        </p>
        <p className="hero__count">
          <span className="hero__count-number">{String(peopleCount).padStart(2, "0")}</span>
          <span>teammates across {teamCount} teams</span>
        </p>
      </div>

      <aside className="hero-note" aria-label="Our team principle">
        <div className="hero-note__topline">
          <span className="hero-note__label">A NORTHSTAR NOTE</span>
          <span className="hero-note__spark" aria-hidden="true">✳</span>
        </div>
        <div className="hero-note__illustration" aria-hidden="true">
          <span className="orbit orbit--one" />
          <span className="orbit orbit--two" />
          <span className="orbit orbit--three" />
          <span className="orbit__center" />
        </div>
        <h2>Good work is a team sport.</h2>
        <p>Different perspectives. Shared momentum. Better things made together.</p>
        <div className="hero-note__footer"><span>CURIOUS BY NATURE</span><span>✦</span><span>KIND BY DESIGN</span></div>
      </aside>
    </section>
  );
}
