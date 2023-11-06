import axios from 'axios'

const getMultilpeCharacters = (charactersURLs) => {
  const charactersAPIsPromises = charactersURLs.map((url) => axios.get(url))

  const requests = axios.all(charactersAPIsPromises)

  return requests.then((response) => response)
}

const characterService = { getMultilpeCharacters }
export default characterService
