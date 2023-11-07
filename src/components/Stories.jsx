import React, {useEffect} from 'react';

const Stories = () => {
    let isLoading = true

    let API = "https://hn.algolia.com/api/v1/search?query=javascript";

    const fetchApiData = async (url) =>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            // isLoading = false;
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, []);

    if(isLoading){
        return <>
            <h1>Loading.....</h1>
        </>
    }

    return (
        <>
            <h2>News Post</h2>
        </>
    );
}

export default Stories;