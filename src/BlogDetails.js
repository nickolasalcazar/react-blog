import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="blog-details">
            { isPending && <p>Loading...</p>}
            { error && <p>An error occured...</p>}
            { !isPending && <h2>{blog.title}</h2> }
            { !isPending && <p>Written by { blog.author }</p>}
            { !isPending && <p>{ blog.body }</p>}
        </div>
    );
}
export default BlogDetails;