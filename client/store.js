import { createStore, combineReducers } from 'redux'
import currentArtist from './reducers/current-artist'
import redirect from './reducers/redirect'

let store = createStore(combineReducers({
  current: currentArtist,
  redirect: redirect
}))

export default store