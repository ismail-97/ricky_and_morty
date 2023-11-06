import axios from 'axios'

const getAll = (url) => {
  const request = axios.get(url)
  return request.then((response) => response.data)
}

const getEpisode = (url) => {
  const request = axios.get(url)
  return request.then((response) => response.data)
}

const episodeService = { getAll, getEpisode }
export default episodeService
