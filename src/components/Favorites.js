import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorites } from '../reducers/favoriteCharacterReducer'
import CharacterModal from './CharacterModal'
import { useState } from 'react'

const Favorites = () => {
  const favoriteCharacters = useSelector((state) => state.favorite)
  return (
    <div className="text-center d-inline-block">
      <div className="h2 mb-5">Your Favorites</div>
      {favoriteCharacters.map((favorite) => (
        <Character key={favorite.id} character={favorite} />
      ))}
    </div>
  )
}

const Character = (props) => {
  const [show, setShow] = useState(false)

  const character = props.character
  const dispatch = useDispatch()

  const deleteFromFavorites = (character) => {
    if (
      window.confirm(
        'Are you sure you want to delete it from your favorite list?'
      )
    ) {
      dispatch(removeFromFavorites(character.id))
    }
  }

  return (
    <div className="favorite-div row">
      <CharacterModal character={character} show={show} setShow={setShow} />

      <span
        className="favorite-name col h5 m-auto"
        onClick={() => setShow(true)}
      >
        {character.name}
      </span>
      <span className="col">
        {' '}
        <Button
          className="delete-btn mt-2 "
          variant={'danger'}
          onClick={() => deleteFromFavorites(character)}
        >
          Delete
        </Button>
      </span>
    </div>
  )
}

export default Favorites
