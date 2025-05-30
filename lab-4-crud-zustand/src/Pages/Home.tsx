import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">My Blog Website! WelCome</h1>
        <p className="mb-6 text-grey-700" >For this website we are going to create, read, update, and delete our blog posts</p>
        <Link to={"/blog"} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">View All Blog Post</Link>

    </div>
        
  )
}

export default Home