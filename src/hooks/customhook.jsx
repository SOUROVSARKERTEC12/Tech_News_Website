import {useContext} from "react";
import {AppContext} from "../context/context.jsx";

// Custom hook creation
const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {useGlobalContext}