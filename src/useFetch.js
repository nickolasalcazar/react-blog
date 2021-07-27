import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Error:', response.status, response.statusText)
                else return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                console.log(error);
                setError(true);
                setIsPending(false);
            })
    }, [url])
    return {data, isPending, error};
}
export default useFetch;
