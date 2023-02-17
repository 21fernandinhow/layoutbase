import React from "react";
import ProductItem from "../components/product-item";

function Products(){

    const productsList = [
        {
            name: 'Produto 1',
            link: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png'
        },
        {
            name: 'Produto 2',
            link: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png'
        },
        {
            name: 'Produto 3',
            link: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png'
        },
        {
            name: 'Produto 4',
            link: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png'
        },
    ]

    return(
        <section className="products content-container" data-aos="zoom-in" data-aos-duration="1500">
            <h2>Produtos</h2>
            <div className="show-products">
                {productsList.map((i) => <ProductItem key={i.name} link={i.link} name={i.name}/>)}
            </div>
            <h3>Algo te interessou? Saiba mais em nosso Whatsapp:</h3>
            <a href="https://api.whatsapp.com/send/?phone=5532988407783&text&type=phone_number&app_absent=0" className="btn-wpp" target="_blank" rel="noopener noreferrer">
                Quero comprar!
            </a>
        </section>
    )
};

export default Products;