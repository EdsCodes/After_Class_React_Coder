import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}

export default App
