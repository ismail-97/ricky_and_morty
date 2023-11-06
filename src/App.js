import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import episodeService from './services/episodeService'
import Favorites from './components/Favorites'
import { initializeFavorites } from './reducers/favoriteCharacterReducer'
import { useDispatch } from 'react-redux'

function App() {
  const [episodes, setEpisodes] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    episodeService
      .getAll('https://rickandmortyapi.com/api/episode')
      .then((episodes) => setEpisodes(episodes.results))

    const favorites = window.localStorage.getItem('favorites')
    if (favorites) {
      dispatch(initializeFavorites(JSON.parse(favorites)))
    }
  }, [])

  return (
    <Router>
      <div className="bg-light text-center">
        <div className="h1 text-center display-1 m-5">Ricky And Morty</div>

        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/episode/:id" element={<Characters />} />
          <Route path="/" element={<Episodes episodes={episodes} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
