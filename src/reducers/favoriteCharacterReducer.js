const initialState = []

const favoriteCharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return action.payload
    case 'ADD':
      const newState = state.concat(action.payload)
      window.localStorage.setItem('favorites', JSON.stringify(newState))
      return newState
    case 'REMOVE':
      const id = action.payload
      state = state.filter((e) => e.id !== id)
      window.localStorage.setItem('favorites', JSON.stringify(state))
      return state
    default:
      return state
  }
}

export const addToFavorites = (character) => {
  return {
    type: 'ADD',
    payload: character,
  }
}

export const removeFromFavorites = (id) => {
  return {
    type: 'REMOVE',
    payload: id,
  }
}

export const initializeFavorites = (favorites) => {
  return {
    type: 'INITIALIZE',
    payload: favorites,
  }
}

export default favoriteCharacterReducer
