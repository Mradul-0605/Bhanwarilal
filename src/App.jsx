import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import BestSellers from "./components/BestSellers"
import About from "./components/About"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"

import Sweets from "./pages/Sweets"
import Namkeen from "./pages/Namkeen"
import GiftBoxes from "./pages/GiftBoxes"
import Locations from "./pages/Locations"

import {
  Routes,
  Route
} from "react-router-dom"

function Home() {

  return (

    <>
      <Navbar />
      <Hero />
      <Categories />
      <BestSellers />
      <About />
      <Footer />
    </>

  )
}

function App() {

  return (

    <>
      <CustomCursor />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sweets" element={<Sweets />} />

        <Route path="/namkeen" element={<Namkeen />} />

        <Route path="/giftboxes" element={<GiftBoxes />} />

        <Route path="/locations" element={<Locations />} />

      </Routes>

    </>

  )
}

export default App