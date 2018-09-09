const autocompleteSuggestions = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVED_SUGGESTIONS':
      return [...action.payload];
    case 'CLEAR_SUGGESTIONS': 
      return [];
    default:
      return state;
  }
};

export default autocompleteSuggestions;