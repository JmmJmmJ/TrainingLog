import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import treeniService from '../services/treenit'

function Treeni() {
  const [treeni, setTreeni] = useState([])
  const { treeniId } = useParams()

  useEffect(() => {
    treeniService.getById(treeniId).then((treeni) => {
      setTreeni(treeni)
    })
  }, [])
  return (
    <p>
      {treeni.laji} {treeni.kesto}
    </p>
  )
}

export default Treeni
