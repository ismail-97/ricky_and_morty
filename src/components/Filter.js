import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'
import CharacterModal from './CharacterModal'

const Filter = (props) => {
  const [searchWord, setSearchWord] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [show, setShow] = useState(false)
  const [character, setCharacter] = useState(null)

  const navigate = useNavigate()

  const items = props.items

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value)

    const result = items.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(result)
    event.target.value === '' && setSearchResult([])
  }

  const handleNavigation = (item) => {
    if (props.itemName === 'character') {
      setCharacter(item)
      setShow(true)
    } else {
      navigate(`/${props.itemName}/${item.id}`)
    }
  }
  return (
    <Row className="mb-2 justify-content-center">
      <CharacterModal character={character} show={show} setShow={setShow} />
      <div className="w-25 search-div">
        <Form.Control
          type="text"
          id="search"
          placeholder={`search by ${props.itemName} name`}
          className="search-input"
          onChange={(event) => handleSearchChange(event)}
        />
        {searchResult.length > 0 && (
          <div className="searchResultBox">
            {searchResult.map((item) => (
              <div onClick={() => handleNavigation(item)} key={item.id}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </Row>
  )
}

export default Filter
