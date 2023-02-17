import React from "react";
import { Link } from "react-router-dom";

function Menu (){
    return(
        <section className="menu">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/about" className="menu-item">Sobre</Link>
            <Link to="/products" className="menu-item">Produtos</Link>
            <Link to="/themes" className="menu-item">Temas</Link>
            <a href="https://api.whatsapp.com/send/?phone=5532988407783&text&type=phone_number&app_absent=0" className="menu-item" target="_blank" rel="noopener noreferrer">Contato</a>
        </section>
    )
};

export default Menu;