function getInitials(name) {
  return name
    .split(" ")
    .map((namePart) => namePart[0])
    .slice(0, 2)
    .join("");
}

export default function PersonCard({ person }) {
  const isAvailable = person.availability === "Available";

  return (
    <article className="person-card">
      <div className="person-card__top">
        <div className={`person-avatar person-avatar--${person.avatarTone}`} aria-hidden="true">
          {getInitials(person.name)}
        </div>
        <span className={`availability${isAvailable ? " availability--open" : ""}`}>
          <span className="availability__dot" aria-hidden="true" />
          {person.availability}
        </span>
      </div>

      <div className="person-card__identity">
        <p className="person-card__team">{person.team}</p>
        <h3>{person.name}</h3>
        <p className="person-card__role">{person.role}</p>
      </div>

      <p className="person-card__bio">{person.bio}</p>

      <ul className="skill-list" aria-label={`${person.name}'s skills`}>
        {person.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>

      <div className="person-card__footer">
        <p className="person-card__location">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M16 8.2c0 4.2-6 9.3-6 9.3S4 12.4 4 8.2a6 6 0 1 1 12 0Z" />
            <circle cx="10" cy="8" r="1.8" />
          </svg>
          {person.location}
        </p>
        <a
          className="contact-link"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(person.email)}&su=Hello%20from%20the%20Northstar%20directory`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Gmail to email ${person.name}`}
        >
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
