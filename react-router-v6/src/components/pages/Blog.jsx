import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Blog = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [searchParams, setSearchParams] = useSearchParams()
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>


    const handleOnChange = (e) => {
        const filter = e.target.value
        setSearchParams({ filter })
    }

    return (
        <div className="container">
            <h1 className="text-center">Blog Page</h1>
            <input type="text" name="searchBlog" className="form-control" value={searchParams.get('filter') || ''} onChange={handleOnChange} />
            <ul>
                {
                    data.filter((post) => post.title.includes(searchParams.get('filter') || ''))
                        .map((post) => (
                            <li key={post.id + 'li'}>
                                <Link key={post.id} to={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
                            </li>
                        ))
                }
            </ul>

        </div>
    )
}

export default Blog