import { usePostStore } from "../../stores/post.store"
import { useState, type FormEvent } from "react"



const AddBlogPost = () => {
    const {addPost} = usePostStore()
    const [inputTitle, setInputTitle] = useState<string>("")
    const [inputContent, setInputContent] = useState<string>('')
    const [inputPublished, setInputPublished] = useState<boolean>(false)



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addPost({
            title: inputTitle,
            content: inputContent,
            published: inputPublished

        })


        setInputTitle ("")
        setInputContent ("")
        setInputPublished(false)
    }




  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">

  <h2 className="text-2xl font-bold mb-4 text-center">Create Post</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input 
      type="text" 
      placeholder="Title.." 
      value={inputTitle} 
      onChange={(e) => setInputTitle(e.target.value)} 
    />

    <input 
      type="text" 
      placeholder="Add Post..." 
      value={inputContent} 
      onChange={(e) => setInputContent(e.target.value)} 
    />

   
    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">Submit Post</button>
  </form>

  {inputTitle  && (
    <div className="mt-8"> 
      <h3 className="text-xl font-semibold mb-2">Preview</h3>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100" >
          <tr>
            <th className="p-2 border-b border-gray-300">{inputTitle}</th>
          </tr>
        </thead>
        {inputContent && (
          <tbody>
            <tr>
              <td className="p-2 border-t border-gray-200">{inputContent}</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )}

</div>

  )
}

export default AddBlogPost