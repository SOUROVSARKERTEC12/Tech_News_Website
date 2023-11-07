import React from 'react';
import {useGlobalContext} from "../hooks/customhook.jsx";

function Pagination() {
    const {page, nbPages, getPrevPage, getNextPage} = useGlobalContext()

    return (
        <>
            <div className="flex items-center justify-center mt-3">
                <button onClick={() => getPrevPage()} className="mx-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    PREV
                </button>
                <p className="font-semibold">
                    {page + 1} of {nbPages}
                </p>
                <button onClick={() => getNextPage()} className="mx-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    NEXT
                </button>
            </div>
        </>

    );
}

export default Pagination;