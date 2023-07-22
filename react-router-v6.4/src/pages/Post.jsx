import { useLoaderData } from "react-router-dom";

const Post = () => {
    const {post} = useLoaderData()
    return (
        <div>
            <h1>Post</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;

export const LoaderPost = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!res.ok){
        throw new Error(res.statusText)
    }
    const post  = await res.json()
    return {post}
}