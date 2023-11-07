import React from 'react';
import {useGlobalContext} from "../hooks/customhook.jsx";

function Search() {
    const access = useGlobalContext()

    return (
        <div>Search {access}</div>
    );
}

export default Search;