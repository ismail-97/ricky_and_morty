import '../styles.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Pagination = (props) => {
  const setSelection = props.setSelection
  const selection = props.selection
  const PagesNo = Math.ceil(props.noOfCards / 3)
  const arrayForRendering = [...Array(PagesNo).keys()].map((e) => ++e)

  return (
    <Container>
      <Row className="justify-content-center h1 m-5">{props.headline}</Row>
      <Row className="justify-content-center">{props.children}</Row>
      <Row className="justify-content-center m-3">
        <Button
          variant="info pagination-button "
          disabled={selection === 1}
          onClick={() => setSelection(selection - 1)}
        >
          prev
        </Button>
        {arrayForRendering.map((e) => (
          <Button
            key={e}
            variant="info pagination-button"
            disabled={selection === e}
            onClick={() => setSelection(e)}
          >
            {e}
          </Button>
        ))}
        <Button
          variant="info pagination-button"
          disabled={selection === PagesNo}
          onClick={() => setSelection(selection + 1)}
        >
          next
        </Button>
      </Row>
    </Container>
  )
}

export default Pagination
