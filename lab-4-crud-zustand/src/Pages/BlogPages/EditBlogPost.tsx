import { useNavigate, useParams } from "react-router-dom"
import { usePostStore } from "../../stores/post.store"
import { useEffect, useState, type FormEvent } from "react"



const EditBlogPost = () => {
    const {id} = useParams() 
    const {getPostById, updatePostById} = usePostStore()
    const thisPost = getPostById(String(id))
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputContent, setInputContent] = useState<string>("")
    const navigate = useNavigate()



    useEffect(() => {
        if(!thisPost) return 


        setInputTitle(thisPost.title)
        setInputContent(thisPost.content)
    }, [id, thisPost])



    const handleSubmit  = (e: FormEvent<HTMLFormElement>) =>  {
        e.preventDefault()  

        navigate('/blog')

        updatePostById(String(id), {
            title: inputTitle,
            content: inputContent
        })

        setInputTitle("")
        setInputContent("")


    }
  return (
   <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">Edit Post</h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    <input 
      type="text" 
      placeholder="Update title here..." 
      value={inputTitle} 
      onChange={(e) => setInputTitle(e.target.value)} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input 
      type="text" 
      placeholder="Update content here..." 
      value={inputContent} 
      onChange={(e) => setInputContent(e.target.value)} 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition" type="submit">Save Post</button>
  </form>
</div>

  )
}

export default EditBlogPost