import './App.css'

function App() {

  return (
    <>
      <div className="h-screen bg-darkBg flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-orbitron text-neonBlue shadow-neon-blue animate-pulse-slow">
          🚀 STARSHIP HUD SYSTEM
        </h1>
        <p className="mt-4 text-lg font-vt323 text-neonGreen animate-glitch">
          Initializing Neural Interface...
        </p>
        <button className="mt-6 px-6 py-2 bg-neonPurple text-black font-orbitron rounded-lg shadow-neon-purple">
          Access Terminal
        </button>
      </div>
    </>
  )
}

export default App
