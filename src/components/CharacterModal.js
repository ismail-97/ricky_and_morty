import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

const CharacterModal = (props) => {
  const character = props.character

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="text-center">
          <Card
            style={{ width: '18rem', display: 'inline-block' }}
            className="m-1"
          >
            <Card.Body className="text-center mt-3 mb-0">
              <Card.Img variant="top" src={character?.image} />
              <Card.Title style={{ height: '2rem' }} className="mt-3">
                {character?.name}
              </Card.Title>
              <Card.Text>Species: {character?.species}</Card.Text>
              <Card.Text>Gender: {character?.gender}</Card.Text>
              <Card.Text>No Of episodes: {character?.episode.length}</Card.Text>
              <Card.Text>Status: {character?.status}</Card.Text>
              <Card.Text>Origin: {character?.origin.name}</Card.Text>
              <Card.Text>Location: {character?.location.name}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CharacterModal
