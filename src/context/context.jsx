// context creation (done)
// provider (done)
// consumer lengthy process that why remove
// useContext hook (done)

import {createContext, useEffect, useReducer} from "react";
import reducer from "../reducer/reducer.jsx";

const initialState = {
    isLoading: true,
    query: "JavaScript",
    nbPages: 0,
    page: 0,
    hits: [],
}

let API = "https://hn.algolia.com/api/v1/search?"

const AppContext = createContext(null)

// to create a provider function
const AppProvider = ({children}) => {

    const [data, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {

        dispatch({type:"SET_LOADING"})

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                },
            });
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApiData(`${API}query=${data.query}&page=${data.page}`);
    }, []);


    return (
        <AppContext.Provider value={{...data}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContext, AppProvider}
