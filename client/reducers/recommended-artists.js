function recommended(state = [
  {name: '', pic: ''},
  {name: '', pic: ''},
  {name: '', pic: ''},
  {name: '', pic: ''},
  {name: '', pic: ''},
  {name: '', pic: ''}
  ], action) {
  switch(action.type) {
    case 'RECEIVED_ARTISTS':
      return [...action.payload.artists]
    case 'CLEAR_ARTISTS':
      return [
          {name: '', pic: ''},
          {name: '', pic: ''},
          {name: '', pic: ''},
          {name: '', pic: ''},
          {name: '', pic: ''},
          {name: '', pic: ''}
        ]
    default:
      return state
  }
}

export default recommended