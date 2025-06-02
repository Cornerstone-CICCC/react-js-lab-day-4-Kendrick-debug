import { Link } from "react-router-dom"
import { usePostStore } from "../../stores/post.store"


const BlogList = () => {
    const {posts, deletePostByid} = usePostStore()

    const handleDelete = (id: string) => {
        deletePostByid(id)
    }
  return (
    <div className="p-6 max-w-6xl mx-auto ">
  <h2 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl font-extrabold text-center"> All Posts</h2>

  <div>
    {posts.map(post => (
      <table key={post.id} className="w-full border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3 text-lg font-semibold" >{post.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 text-sm text-gray-700" > {post.content}</td>
          </tr>
          <tr>
            <td className="p-3 space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                <Link to={`/blog/${post.id}`}>View Blog</Link>
              </button>
              <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                <Link to={`/blog/edit/${post.id}`}>Edit Blog</Link>
              </button>
              <button onClick={() => handleDelete(post.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    ))}
  </div>
</div>

  )
}

export default BlogList