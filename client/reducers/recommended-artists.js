function recommended(state = [], action) {
  switch(action.type) {
    case 'RECEIVED_ARTISTS':
      return Object.assign({}, action.payload.artists)
    case 'CLEAR_ARTISTS':
      return []
    default:
      return state
  }
}

export default recommended