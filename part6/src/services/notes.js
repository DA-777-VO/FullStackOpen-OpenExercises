import axios from 'axios'

const baseURL = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const createNew = async (content) => {
  const object= {content, important: false}
  const response = await axios.post(baseURL, object)
  console.log('RESPONSE createNew: ', response)
  return response.data
}

const importanceUpdate = async (id, updatedNote) => {
    const response = await axios.put(`${baseURL}/${id}`, updatedNote)
    return response.data
}

export default { importanceUpdate, getAll, createNew }