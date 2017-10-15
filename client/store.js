import { createStore, combineReducers } from 'redux'
import currentArtist from './reducers/current-artist'
import redirect from './reducers/redirect'
import recommended from './reducers/recommended-artists'

let store = createStore(combineReducers({
  current: currentArtist,
  redirect: redirect,
  recommended: recommended
}))

export default store