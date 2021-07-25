import React from "react";
import BlogList from './BlogList'

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {
    const [blogs, setBlogs] = React.useState([
        {title: 'Blog 1', body: 'red', author: 'Mario', id: 1},
        {title: 'Blog 2', body: 'yellow', author: 'Yoshi', id: 2},
        {title: 'Blog 3', body: 'green', author: 'Luigi', id: 3}
    ]);

    const handleDelete = (id) => {
        // Filter for items that do not match the id
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className='Home'>
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
        </div>
    )
}

export default Home;