import { AppRoutes } from "../../routes/approutes"
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"

function Layout() {

    return (
      <>
      <Navbar></Navbar>
      <main> 
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
      </>

    )
  }
  
  export default Layout
  