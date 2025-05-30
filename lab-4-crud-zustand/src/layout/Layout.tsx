import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout