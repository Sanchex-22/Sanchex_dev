import { AppRoutes } from "../../routes/approutes"
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"
import WhatsAppBtn from "../ui/whatsapp_btn"

function Layout() {
  // const whatsappText = "Estoy%20interesado%20en%20conocer%20m%C3%A1s."
    return (
      <>
      <Navbar></Navbar>
      <main> 
        <AppRoutes></AppRoutes>
      </main>
      <Footer></Footer>
      <WhatsAppBtn></WhatsAppBtn>
      </>

    )
  }
  
  export default Layout
  