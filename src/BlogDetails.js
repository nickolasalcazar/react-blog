import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => history.push('/'));
    }
    return (
        <div className="blog-details">
            { isPending && <p>Loading...</p>}
            { error && <p>An error occurred...</p>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.body }</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}            
        </div>
    );
}
export default BlogDetails;