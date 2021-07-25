import { useState, useEffect } from 'react';
import BlogList from './BlogList'

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='Home'>
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
    )
}

export default Home;