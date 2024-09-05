import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
  
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
  )
}

export default App;
