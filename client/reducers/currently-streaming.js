function currentlyStreaming(state = {title: ''}, action) {
  switch(action.type) {
    case 'CURRENTLY_STREAMING':
      return Object.assign({}, {title: action.payload.title})
    case 'STOPPED_STREAMING':
      return {title: ''}
    default:
      return state
  }
}

export default currentlyStreaming