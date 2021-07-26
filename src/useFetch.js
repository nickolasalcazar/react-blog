import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);             // State for page content
    const [isPending, setIsPending] = useState(true);   // State for pending loading data
    const [error, setError] = useState(null);           // State for fetch error

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log('Error:', response.status, response.statusText)
                    throw new Error('Could not fetch')
                }
                else return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            });
    }, [url]); // Dependency array: will run useFetch is url is changed
    return { data, isPending, error };  // Can return any value, such as an array, bool, etc.
}
export default useFetch;
