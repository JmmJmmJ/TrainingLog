import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [treenit, setTreenit] = useState([])
  const [uusiTreeni, setUusiTreeni] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/treenit').then((response) => {
      setTreenit(response.data)
    })
  }, [])

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

  const lisaaTreeni = (event) => {
    event.preventDefault()
    const treeniObject = {
      laji: uusiTreeni,
      kesto: 10,
    }
    axios
      .post('http://localhost:3001/treenit', treeniObject)
      .then((response) => {
        setTreenit(treenit.concat(response.data))
      })
  }

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
        <form onSubmit={lisaaTreeni}>
          <label>
            Lisää treeni:
            <input
              type="text"
              value={uusiTreeni}
              onChange={(e) => setUusiTreeni(e.target.value)}
            />
          </label>
          <button>Lisää treeni</button>
        </form>
        <ul>{treenitLista}</ul>
        Yhteensä {listaSumma}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
