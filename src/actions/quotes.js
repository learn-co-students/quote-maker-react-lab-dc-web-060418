// TODO: Create action creators as defined in tests
// addQuote(quote: {})
// should return an Object with a type of "ADD_QUOTE"and a quote object:
const addQuote = (quote) =>({
    type: "ADD_QUOTE",
    quote: quote
})


// removeQuote(quoteId: Integer)
//          should return an Object with a type of "REMOVE_QUOTE" and a quoteId:
const removeQuote = (quoteId) =>({
    type: "REMOVE_QUOTE",
    quoteId: quoteId
})
// upvoteQuote(quoteId: Integer)
//          should return an Object with a type of "UPVOTE_QUOTE" and a quoteId:
const upvoteQuote = (quoteId) =>({
    type: "UPVOTE_QUOTE",
    quoteId: quoteId
})

//          downvoteQuote(quoteId: INteger)
//          should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId:

const downvoteQuote = (quoteId) =>({
    type: "DOWNVOTE_QUOTE",
    quoteId: quoteId
})


export { addQuote, removeQuote, upvoteQuote, downvoteQuote  }