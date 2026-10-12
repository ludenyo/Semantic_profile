import PersonCard from "./PersonCard.jsx";

export default function PeopleGrid({ people }) {
  return (
    <div className="people-grid">
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}
