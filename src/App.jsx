import './App.css'
import Greetings from './components/Greetings.jsx'
import Mahasiswa from './components/Mahasiswa.jsx'

function App() {

  const mhs = [
    {
      id: 1,
      name: "Winston Churchill",
      age: 30
    },
    {
      id: 2,
      name: "Franklin D. Roosevelt",
      age: 25
    },
    {
      id: 3,
      name: "Iosef Stalin",
      age: 28
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Front-End Development</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="main">
        <h2>Welcome to Front-End Development</h2>

        <Greetings />

        <p>
          Ini adalah Website yang diciptakan sebagai latihan untuk mempelajari Front-End Development menggunakan React JS.
        </p>

        <h2>Daftar Mahasiswa</h2>
        {mhs.map((m, index) => (
          <Mahasiswa 
          key={index}
          id={m.id}
          name={m.name} 
          age={m.age} />
        ))}

        <button>Get Started</button>
      </main>
    </div>
  )
}

export default App