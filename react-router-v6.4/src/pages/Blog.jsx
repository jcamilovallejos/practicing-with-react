import { Link, useLoaderData } from "react-router-dom"

const Blog = () => {
    const {posts} = useLoaderData()
    console.log(posts)
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Blog

export const loaderBlog = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts') 
   const posts = await res.json()
   return {posts}
}