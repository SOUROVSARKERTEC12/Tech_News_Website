const reducer = (state, action) =>{
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (data) => data.objectID !== action.payload
                )
            }
        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload
            }
    }

    return state
}

export default reducer