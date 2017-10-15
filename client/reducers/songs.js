function songs(state = [{name: '', href: ''},
  {name: '', href: ''},
  {name: '', href: ''}
], action) {
    switch(action.type) {
      case 'RECEIVED_SONGS':
        return [...action.payload.songs]
      case 'CLEAR_SONGS':
        return [{name: '', href: ''},
          {name: '', href: ''},
          {name: '', href: ''}
        ]
      default:
        return state
    }
}

export default songs