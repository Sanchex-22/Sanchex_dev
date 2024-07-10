import { AppRoutes } from "../../routes/approutes"
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"

function Home() {

    return (
      <main>
        <Navbar></Navbar>
        <AppRoutes></AppRoutes>
        <Footer></Footer>
      </main>
    )
  }
  
  export default Home
  