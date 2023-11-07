// context creation (done)
// provider (done)
// consumer lengthy process that why remove
// useContext hook

import {createContext} from "react";

const AppContext = createContext()

// to create a provider function
const AppProvider = ({children})=>{
    return(
        <AppContext.Provider value="Use form Anywhere">
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
