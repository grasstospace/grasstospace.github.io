import './App.css'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { FirstPersonControls, Text } from '@react-three/drei'

export default function App() {
  const [is3D, setIs3D] = useState(false)

  return (
    <>
      <Navbar is3D={is3D} setIs3D={setIs3D} />
      {is3D ? (
        <Scene3D />
      ) : (
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
            <h2>About ARC</h2>
            <p className="section-desc">
              ARC (Aerospace Research Collective) is our overarching program that
              unites grass-roots enthusiasm with ambition for the final frontier.
              We build rockets, design systems, and foster a community that lives
              at the intersection of grass and space.
            </p>
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
      )}
    </>
  )
}

/* ---------- Components ---------- */

function Navbar({ is3D, setIs3D }: { is3D: boolean; setIs3D: (v: boolean) => void }) {
  return (
    <nav className="navbar">
      <button onClick={() => setIs3D(!is3D)}>
        {is3D ? 'Exit 3D Mode' : 'Enter 3D Mode'}
      </button>
    </nav>
  )
}

function Scene3D() {
  return (
    <>
      <Canvas className="canvas-3d">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* simple "house" layout of boxes representing sections */}
        <SectionBox position={[-6, 1, -6]} title="Team" />
        <SectionBox position={[6, 1, -6]} title="Rockets" />
        <SectionBox position={[-6, 1, 6]} title="Parts" />
        <SectionBox position={[6, 1, 6]} title="Stats" />

        <FirstPersonControls lookSpeed={0.1} movementSpeed={5} />
      </Canvas>
      <div className="instructions">
        <p>Use <strong>WASD</strong> to move and mouse to look around.</p>
        <p>Click the canvas to lock pointer.</p>
      </div>
    </>
  )
}

function SectionBox({ position, title }: { position: [number, number, number]; title: string }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#151b23" />
      </mesh>
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  )
}

// existing card components remain unchanged below

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

// ... rest of card components remain the same

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
