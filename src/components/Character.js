import { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CharacterModal from './CharacterModal'

import {
  addToFavorites,
  removeFromFavorites,
} from '../reducers/favoriteCharacterReducer'
import { useSelector, useDispatch } from 'react-redux'

const Character = (props) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorite)
  const [show, setShow] = useState(false)
  const character = props.character

  const handleFavorite = (character) => {
    if (!favorites.map((f) => f.id).includes(character.id)) {
      if (favorites.length === 10) {
        window.alert('you can add maximum 10 characters to your favorite list')
      } else {
        try {
          dispatch(addToFavorites(character))
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      try {
        dispatch(removeFromFavorites(character.id))
      } catch (error) {
        console.log(error)
      }
    }
  }

  const selected = favorites.map((f) => f.id).includes(character.id)
    ? 'selected'
    : ''
  const title = !favorites.map((f) => f.id).includes(character.id)
    ? 'Add To Favorites'
    : 'Remove From Favorites'

  return (
    <>
      <CharacterModal character={character} show={show} setShow={setShow} />
      <Card style={{ width: '18rem', display: 'inline-block' }} className="m-1">
        <Card.Body className="text-center mt-3 mb-0">
          <Card.Img variant="top" src={props.character.image} />
          <Card.Title style={{ height: '3rem' }} className="mt-3 mb-3">
            <span>{props.character.name}</span>
            <span
              className={`material-symbols-outlined favorite ${selected}`}
              title={title}
              onClick={() => handleFavorite(character)}
            >
              favorite
            </span>
          </Card.Title>
          <Button variant="primary" className="" onClick={() => setShow(true)}>
            Show Character In Details
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Character
