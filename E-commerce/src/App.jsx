import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./Pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Product from "./Pages/ProductDetail";
import Footer from "./components/Footer";
import Account from "./components/Account";


function App() {

  return ( 
    <BrowserRouter>
  
   <Navbar/>
   <Account/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
  )
}

export default App;
