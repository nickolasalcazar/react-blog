//import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {    
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className='Home'>
            {error && <p>Something went wrong...</p>}
            {isPending && !error && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
    )
}

export default Home;