import React from "react";

/*
 * The Home component contains all of the content associated with the homepage of the app.
 */
const Home = () => {


    const [blogs, setBlogs] = React.useState([
        {title: 'Blog 1', body: 'red', author: 'Mario', id: 1},
        {title: 'Blog 2', body: 'yellow', author: 'Yoshi', id: 2},
        {title: 'Blog 3', body: 'green', author: 'Luigi', id: 3}
    ]);

    return (
        <div className='Home'>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;