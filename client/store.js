import { createStore, combineReducers } from 'redux'
import currentArtist from './reducers/current-artist'

let store = createStore(combineReducers({
  current: currentArtist
}))

export default store