import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import treeniService from '../services/treenit'

function Treeni() {
  const [treeni, setTreeni] = useState([])
  const { treeniId } = useParams()
  const [laji, setLaji] = useState('')
  const [kesto, setKesto] = useState('')

  useEffect(() => {
    treeniService.getById(treeniId).then((treeni) => {
      setTreeni(treeni)
    })
  }, [])

  const muokkaaTreenia = (event) => {
    event.preventDefault()
    const treeni = {
      id: treeniId,
      laji: laji,
      kesto: parseInt(kesto),
    }
    treeniService.edit(treeniId, treeni).then(setTreeni(treeni))
  }

  return (
    <>
      <p>
        {treeni.laji} {treeni.kesto}
      </p>
      <form onSubmit={muokkaaTreenia}>
        <input
          type="text"
          value={laji}
          onChange={(e) => setLaji(e.target.value)}
        />
        <input
          type="number"
          value={kesto}
          onChange={(e) => setKesto(e.target.value)}
        />
        <button>Tallenna</button>
      </form>
    </>
  )
}

export default Treeni
