import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Our Rocketry Team 🚀</h1>
        <p></p>

        <div className="hero-photo-placeholder"></div>
      </header>

      <section>
        <h2>Meet the Team</h2>
        <div className="cards">
          <TeamCard name="" role="" bio="" />
          <TeamCard name="" role="" bio="" />
          <TeamCard name="" role="" bio="" />
          <TeamCard name="" role="" bio="" />
          <TeamCard name="" role="" bio="" />

        </div>
      </section>

      <section>
        <h2>Past Rockets</h2>
        <div className="cards">
          <RocketCard name="" description="" />
          <RocketCard name="" description="" />
          <RocketCard name="" description="" />
        </div>
      </section>

      <section>
        <h2>Designed Parts</h2>
        <div className="cards">
          <PartCard name="" description="" />
          <PartCard name="" description="" />
          <PartCard name="" description="" />
        </div>
      </section>

      <section>
        <h2>Flight Statistics</h2>
        <div className="stats">
          <Stat label="" value="" />
          <Stat label="" value="" />
          <Stat label="" value="" />
          <Stat label="" value="" />
        </div>
      </section>

      <section>
        <h2>Group photos</h2>
        <p className="section-desc"></p>

        <div className="photo-grid">
          <div className="photo-placeholder"></div>
          <div className="photo-placeholder"></div>
          <div className="photo-placeholder"></div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rocketry Team</p>
      </footer>
    </div>
  )
}

function TeamCard({ name, role, bio }: any) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{bio}</p>
    </div>
  )
}

function RocketCard({ name, description }: any) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="img-placeholder"></div>
    </div>
  )
}

function PartCard({ name, description }: any) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="img-placeholder"></div>
    </div>
  )
}

function Stat({ label, value }: any) {
  return (
    <div className="stat">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  )
}
