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

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

import ChatBot from "./components/ChatBot";
import Contact from "./pages/Contact";

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
      <Contact />
      <ChatBot />
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

        <Route path="/owner-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </>

  )
}

export default App