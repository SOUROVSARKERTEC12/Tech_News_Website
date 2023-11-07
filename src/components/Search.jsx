import React from 'react';
import {useGlobalContext} from "../hooks/customhook.jsx";

function Search(){
    const {query, searchPost} = useGlobalContext()
    return (
        <>
            <h1 className="text-center mt-8 mb-4 text-3xl font-bold">Honorable Visitors To This Website</h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex justify-center items-center">
                <div className="text-center">
                    <input
                        type="text"
                        placeholder="Search here..."
                        value={query}
                        onChange={(e) => searchPost(e.target.value)}
                        className="rounded-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out hover:shadow-md"
                    />
                </div>
            </form>
        </>

    );
}

export default Search;