import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";


const BlogDetails = () => {
    const params = useParams()
    const res = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return (
        <div className="container">
            <h1 className="text-center">Blog details</h1>
            {res.loading && <h1>Loading...</h1>}
            {res.error && <h1>Error: {res.error}</h1>}
            {res.data && !res.loading && (
                res.data.body
            )}
        </div>
    );
};

export default BlogDetails;