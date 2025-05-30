
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './Pages/Home'
import BlogList from './Pages/BlogPages/BlogList'
import AddBlogPost from './Pages/BlogPages/AddBlogPost'
import EditBlogPost from './Pages/BlogPages/EditBlogPost'
import BlogDetails from './Pages/BlogPages/BlogDetails'

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<BlogList />}/>
          <Route  path='blog/new' element={<AddBlogPost />}/>
          <Route path='blog/edit/:id' element={<EditBlogPost />} />
          <Route path='blog/:id' element={<BlogDetails />}/>


          </Route>

        </Routes>
      
      </BrowserRouter>
        
      </div>
    
    </>
  )
}

export default App
