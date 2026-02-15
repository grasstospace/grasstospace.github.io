import './App.css'

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Our Rocketry Team 🚀</h1>
        <p>Designing, building, and launching rockets</p>
        <div className="hero-photo-placeholder"></div>
      </header>

      <section>
        <h2>Meet the Team</h2>
        <div className="cards">
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
        <h2>Group Photos</h2>
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

/* ---------- Components ---------- */

type TeamCardProps = {
  name: string
  role: string
  bio: string
}

function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{bio}</p>
    </div>
  )
}

type RocketCardProps = {
  name: string
  description: string
}

function RocketCard({ name, description }: RocketCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="img-placeholder"></div>
    </div>
  )
}

type PartCardProps = {
  name: string
  description: string
}

function PartCard({ name, description }: PartCardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="img-placeholder"></div>
    </div>
  )
}

type StatProps = {
  label: string
  value: string
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="stat">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  )
}
