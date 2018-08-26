

export default (state = [], action) => {
  
  let idx;
  switch(action.type){

    case "ADD_QUOTE":
    
    return [...state, action.quote]

    case "REMOVE_QUOTE":

    return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
    //find quote and then update the vote value +1
    idx = state.findIndex(quote => quote.id === action.quoteId)
    let oldQuote = state[idx]
     
       return [...state.slice(0,idx), Object.assign({}, oldQuote, {votes: oldQuote.votes += 1}), ...state.slice(idx+1)]
     
    

    case "DOWNVOTE_QUOTE":
    
    idx = state.findIndex(quote =>  quote.id === action.quoteId)
    let downQuote = state[idx]
    if(downQuote.votes > 0) {
      return [...state.slice(0,idx), Object.assign({}, downQuote, {votes: downQuote.votes -= 1}), ...state.slice(idx+1)] 
    }else{
      return state
    }
    

    default:
    return state;
  }
  
}
