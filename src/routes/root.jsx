import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import treeniService from '../services/treenit'
import Treeni from '../components/Treeni'

function Root() {
  const [treenit, setTreenit] = useState([])
  const [uusiTreeni, setUusiTreeni] = useState('')
  const [uusiTreeniKesto, setUusiTreeniKesto] = useState('')

  useEffect(() => {
    treeniService.getAll().then((treenit) => {
      setTreenit(treenit)
    })
  }, [])

  const treenitLista = treenit.map((treeni) => (
    <Treeni
      key={treeni.id}
      treenit={treenit}
      setTreenit={setTreenit}
      treeni={treeni}
    />
  ))

  const listaSumma = treenit.reduce(
    (total, currentValue) => (total = total + currentValue.kesto),
    0
  )

  const lisaaTreeni = (event) => {
    event.preventDefault()
    const treeniObject = {
      laji: uusiTreeni,
      kesto: parseInt(uusiTreeniKesto),
    }
    treeniService.add(treeniObject).then((response) => {
      setTreenit(treenit.concat(response))
    })
  }

  return (
    <>
      <div className="card">
        <form onSubmit={lisaaTreeni}>
          <label>
            <input
              type="text"
              value={uusiTreeni}
              onChange={(e) => setUusiTreeni(e.target.value)}
            />
            <input
              type="text"
              value={uusiTreeniKesto}
              onChange={(e) => setUusiTreeniKesto(e.target.value)}
            />
          </label>
          <button>Lisää treeni</button>
        </form>
        <ul>{treenitLista}</ul>
        Yhteensä {listaSumma}
      </div>
      <p className="read-the-docs"></p>
    </>
  )
}

export default Root
