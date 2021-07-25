import { useState, useEffect } from 'react';
import BlogList from './BlogList'

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        // Filter for items that do not match the id
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

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
            {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home;