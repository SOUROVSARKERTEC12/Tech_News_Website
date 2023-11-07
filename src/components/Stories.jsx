import React, {useEffect} from 'react';
import {useGlobalContext} from "../hooks/customhook.jsx";

const Stories = () => {

    const {hits, isLoading, removePost} = useGlobalContext()

    if (isLoading) {
        return <>
            <div className="relative flex justify-center items-center">
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  alt="name" className="rounded-full h-28 w-28"/>
            </div>
        </>
    }

    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Programming News Post</h2>
            <div className="flex justify-center items-center">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 content-center">
                    {hits.map((items) => {
                        const { title, author, objectID, url, num_comments } = items;
                        return (
                            <div
                                className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                key={objectID}
                            >
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    By <span className="text-amber-900 font-bold">{author}</span> | <span className="text-fuchsia-900 font-bold">{num_comments}</span> Comments
                                </p>
                                <div className="flex justify-between">
                                    <a
                                        href={url}
                                        target="_blank"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a>
                                    <button className="inline-flex items-center px-3 py-2
                                    text-sm font-medium text-center text-white bg-blue-700
                                    rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                                    focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800"
                                    onClick={()=> removePost(objectID)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>

    );
}

export default Stories;