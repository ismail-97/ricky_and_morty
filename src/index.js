import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import favoriteCharacterReducer from './reducers/favoriteCharacterReducer'

const reducer = combineReducers({
  favorite: favoriteCharacterReducer,
})

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
