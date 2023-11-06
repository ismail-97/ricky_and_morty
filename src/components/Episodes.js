import Pagination from './Pagination'
import Episode from './Episode'
import { useState } from 'react'
import Filter from './Filter'

const Episodes = (props) => {
  const [selection, setSelection] = useState(1)

  const episodes = props.episodes

  const start = (selection - 1) * 3
  const end = start + 3
  const selectedEpisodes = episodes.slice(start, end)
  return (
    <Pagination
      headline="Episodes"
      setSelection={setSelection}
      selection={selection}
      noOfCards={episodes.length}
    >
      <Filter items={episodes} itemName="episode" />
      {selectedEpisodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </Pagination>
  )
}

export default Episodes
