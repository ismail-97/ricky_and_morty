import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Pagination from './Pagination'
import Character from './Character'
import Filter from './Filter'

import episodeService from '../services/episodeService'
import characterService from '../services/characterService'

import axios from 'axios'
import { Button } from 'react-bootstrap'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [episode, setEpisode] = useState([])
  let { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    episodeService
      .getEpisode(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((episode) => {
        setEpisode(episode)
        return episode.characters
      })
      .then((charactersAPIs) => {
        characterService
          .getMultilpeCharacters(charactersAPIs)
          .then((response) => {
            const characters = response.map((response) => response.data)
            setCharacters(characters)
          })
      })
  }, [])

  const [selection, setSelection] = useState(1)
  const start = (selection - 1) * 3
  const end = start + 3
  const charactersToShown = characters.slice(start, end)
  if (episode.length < 1) return null
  return (
    <Pagination
      headline={`${episode.name} Episode Characters`}
      setSelection={setSelection}
      selection={selection}
      noOfCards={characters.length}
    >
      <Filter items={characters} itemName="character" />
      <div className="mb-2 text-center">
        <Button onClick={() => navigate('/favorites')}>
          My Favorite Characters
        </Button>
      </div>
      {charactersToShown.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Pagination>
  )
}

export default Characters
