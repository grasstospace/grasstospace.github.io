import './App.css'

export default function App() {
    const team = [
  {
    name: "Rishabh Gujarathi",
    role: "Website dude",
    bio: "I'm doing this beause I was forced to."
  },
  {
    name: "whoever wants to go here",
    role: "just pick something",
    bio: "don't say anything cringe."
  },
  {
    name: "whoever wants to go here",
    role: "just pick something",
    bio: "don't say anything cringe."
  },
    {
    name: "whoever wants to go here",
    role: "just pick something",
    bio: "don't say anything cringe."
  },
    {
    name: "whoever wants to go here",
    role: "just pick something",
    bio: "don't say anything cringe."
  },
];
return (
<section>
  <h2>Meet the Team</h2>

  <div className="cards">
    {team.map((member) => (
      <div className="card" key={member.name}>
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p>{member.bio}</p>
      </div>
    ))}
  </div>
</section>
