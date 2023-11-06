import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

const Episode = (props) => {
  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }} className="m-1">
      <Card.Body>
        <Card.Title style={{ height: '3rem' }}>{props.episode.name}</Card.Title>
        <Card.Text>Air Date: {props.episode.air_date}</Card.Text>
        <Card.Text>Episode: {props.episode.episode}</Card.Text>
        <Card.Text>
          No Of Characters: {props.episode.characters.length}
        </Card.Text>
        <Button
          onClick={() => navigate(`/episode/${props.episode.id}`)}
          variant="primary"
        >
          Show Episode Characters
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Episode
