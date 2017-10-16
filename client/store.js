import { createStore, combineReducers } from 'redux'
import currentArtist from './reducers/current-artist'
import redirect from './reducers/redirect'
import recommended from './reducers/recommended-artists'
import songs from './reducers/songs'

let store = createStore(combineReducers({
  current: currentArtist,
  redirect: redirect,
  recommended: recommended,
  songs: songs
}))

export default store