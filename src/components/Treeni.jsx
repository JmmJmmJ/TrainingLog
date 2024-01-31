import { Link } from 'react-router-dom'
import treeniService from '../services/treenit'

const Treeni = ({ treenit, setTreenit, treeni }) => {
  const poistaTreeni = (id) => {
    treeniService
      .remove(id)
      .then(setTreenit(treenit.filter((a) => a.id !== id)))
  }

  return (
    <li>
      {treeni.laji} kesto: {treeni.kesto} id: {treeni.id}
      <Link to={`treeni/${treeni.id}`}>
        <button>Näytä</button>
      </Link>
      <button
        onClick={() => {
          poistaTreeni(treeni.id)
        }}
      >
        Poista
      </button>
    </li>
  )
}

export default Treeni
