function redirect(state = {shouldDirect: false}, action) {
  switch(action.type) {
    case 'REDIRECT_NOW':
      return Object.assign({}, {shouldDirect: true})
    case 'DO_NOT_REDIRECT':
      return Object.assign({}, {shouldDirect: false})
    default:
      return state
  }
}

export default redirect