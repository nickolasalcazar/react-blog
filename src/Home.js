import { useState, useEffect } from 'react';
import BlogList from './BlogList'

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => {
                if (!response.ok) {
                    console.log('Error:', response.status, response.statusText)
                    
                    throw new Error('Could not fetch')
                }
                else return response.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            });
    }, []);

    return (
        <div className='Home'>
            {error && <p>Something went wrong...</p>}
            {isPending && !error && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}

        </div>
    )
}

export default Home;