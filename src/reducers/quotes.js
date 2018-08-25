export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      let deleteQuote = state.find(quote => quote.id === action.quoteId)
      let index = state.indexOf(deleteQuote)
      let arr = [...state]
      arr.splice(index, 1)
      return arr
    case 'UPVOTE_QUOTE':
      let upvoteQuote = state.find(quote => quote.id === action.quoteId)
      upvoteQuote.votes+=1
      return [...state]
    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = state.find(quote => quote.id === action.quoteId)
      if (downvoteQuote.votes > 0) {
        downvoteQuote.votes-=1
      }
      return [...state]
    default:
      return state
  }
}
