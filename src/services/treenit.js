import axios from 'axios'
const baseUrl = 'http://localhost:3001/treenit'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const getById = (treeniId) => {
  const request = axios.get(`${baseUrl}/${treeniId}`)
  return request.then((response) => response.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const add = (treeniObject) => {
  const request = axios.post(baseUrl, treeniObject)
  return request.then((response) => response.data)
}

export default {
  getAll,
  getById,
  remove,
  add,
}
