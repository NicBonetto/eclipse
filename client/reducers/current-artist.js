function currentArtist(state = {name: '', pic: ''}, action) {
  switch(action.type) {
    case 'RECEIVED_ARTIST':
      return Object.assign({}, action.payload.artist)
    case 'CLEAR_CURRENT_ARTIST':
      return {name: '', pic: ''}
    default:
      return state
  }
}

export default currentArtist