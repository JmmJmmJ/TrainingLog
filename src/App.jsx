import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [treenit, setTreenit] = useState([
    { id: 0, laji: 'pyöräily', kesto: 60 },
    { id: 1, laji: 'kuntosali', kesto: 45 },
    { id: 2, laji: 'juoksu', kesto: 30 },
  ])
  const [uusiTreeni, setUusiTreeni] = useState(0)
  const [Id, setId] = useState(3)

  const poistaTreeni = (id) => setTreenit(treenit.filter((a) => a.id !== id))

  const treenitLista = treenit.map((treeni) => (
    <li key={treeni.id}>
      {treeni.laji} kesto: {treeni.kesto} id: {treeni.id}
      <button
        onClick={() => {
          poistaTreeni(treeni.id)
        }}
      >
        Poista
      </button>
    </li>
  ))

  const listaSumma = treenit.reduce(
    (total, currentValue) => (total = total + currentValue.kesto),
    0
  )

  const lisaaTreeni = () => (
    setTreenit([...treenit, { id: Id, laji: uusiTreeni, kesto: 10 }]),
    setId(Id + 1)
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form>
          <label>
            Lisää treeni:
            <input
              type="text"
              value={uusiTreeni}
              onChange={(e) => setUusiTreeni(e.target.value)}
            />
          </label>
        </form>
        <button onClick={lisaaTreeni}>Lisää treeni</button>
        <ul>{treenitLista}</ul>
        Yhteensä {listaSumma}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
