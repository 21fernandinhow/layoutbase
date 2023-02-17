import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import About from "../pages/about";
import Products from "../pages/products";
import Themes from "../pages/themes";
import Menu from "./menu";

function Content() {
  
  return (
    <Router>
        <div className='content-section'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/themes' element={<Themes/>} />
                <Route path='*' element={<Home/>} />
            </Routes>
        </div>
        <Menu/>
    </Router>
    
  );
  
};

export default Content;