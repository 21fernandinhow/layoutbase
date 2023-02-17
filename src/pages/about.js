import React from "react";

function About(){
    return(
        <section className="about content-container" data-aos="zoom-in" data-aos-duration="1500">
            <h2>Sobre</h2>
            <div className="two-column">
                <div className="about-image-column">
                    <img alt="logo" src="https://images.vexels.com/media/users/3/137684/isolated/preview/4205608f4b2ad81262e9328efbe9d2ab-geometric-cube-abstract-logo.png"/>
                </div>
                <div className="about-text-column">
                    <p>Este é um layout desenvolvido para ser uma página moderna, responsiva, de alto carregamento e estéticamente agradável que represente 
                        você ou sua marca. <br/> O objetivo é que esse layout seja customizado, com as páginas que deseja, as cores da sua identidade de marca, 
                        e sua logo / avatar onde você vê esse cubo preto. Em seu site, esse texto dará origem a um texto sobre você ou sua marca.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;