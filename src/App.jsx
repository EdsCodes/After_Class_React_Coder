import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import ItemListContainer from "./components/ItemListContainer"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer mensaje={"ENVIOS GRATIS / CABA $100.000 GBA $130.000 ARG $220.000"} />
      <Banner />
      <Footer />
    </>
  )
}

export default App
