import { useState, useEffect } from 'react';
import BlogList from './BlogList'

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Blog 1', body: 'red', author: 'Mario', id: 1},
        {title: 'Blog 2', body: 'yellow', author: 'Yoshi', id: 2},
        {title: 'Blog 3', body: 'green', author: 'Luigi', id: 3}
    ]);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        // Filter for items that do not match the id
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect called');
    }, [name]);

    return (
        <div className='Home'>
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{name}</p>
        </div>
    )
}

export default Home;