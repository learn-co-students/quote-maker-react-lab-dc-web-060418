export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote=>quote.id!==action.quoteId)
    case 'UPVOTE_QUOTE':
      let quoteIndex = state.findIndex(quote=>quote.id===action.quoteId)      
      return [...state.slice(0,quoteIndex),
              {...state[quoteIndex], votes:state[quoteIndex].votes + 1},
              ...state.slice(quoteIndex+1,-1)]
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.findIndex(quote=>quote.id===action.quoteId)
      if (state[quoteIndex].votes === 0)
        return state
      return [...state.slice(0,quoteIndex),
        {...state[quoteIndex], votes:state[quoteIndex].votes - 1},
        ...state.slice(quoteIndex+1,-1)]
    default:
      return state
  }
  
}
