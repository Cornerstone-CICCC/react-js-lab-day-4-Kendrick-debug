import { Link } from "react-router-dom"




const Header = () => {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="flex space-x-4">
                <Link to={"/"} className="hover: underline" >Home </Link> 
                <Link to={"blog"} className="hover: underline" >Blog Listing</Link>
                <Link to={"/blog/new"} className="hover: underline" >Add Post</Link> 
                <Link to={"/blog/1"} className="hover: underline" >Blog Details </Link> 
                <Link to={"/blog/edit/1"} className="hover: underline" >Edit Post </Link> 
            </nav> 

        </header>
    </div>
  )
}

export default Header