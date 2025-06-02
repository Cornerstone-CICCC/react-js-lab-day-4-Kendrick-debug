import { useParams } from "react-router-dom"
import { usePostStore } from "../../stores/post.store"
import { ClipLoader } from "react-spinners"


const BlogDetails = () => {
    const {getPostById} = usePostStore()
    const {id} = useParams()
    const thisPost = getPostById(String(id))

    if (!thisPost) {
        <div>
            <ClipLoader color="#000000"
  speedMultiplier={0} />
        </div>
        return <h2>Loading post...</h2>;
    }

  return (
   <div>

  {thisPost ? (
    <table key={thisPost.id}>
      <thead>
        <tr>
          <th>{thisPost.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{thisPost.content}</td>
        </tr>
      </tbody>
    </table>
  ) : (
    <h2>No post available.</h2>
  )}

</div>

  )
}

export default BlogDetails