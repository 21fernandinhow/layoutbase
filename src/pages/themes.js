import React from "react";

function Themes(){

    const root = document.querySelector(":root");

    const blueTheme = () => {
        root.style.setProperty("--bg-color", "#0A2647")
        root.style.setProperty("--primary-color", "#144272")
        root.style.setProperty("--secondary-color", "#205295")
        root.style.setProperty("--terciary-color", "#2C74B3")
        root.style.setProperty("--contrast-color", "#f5f5f5")
    }

    const greenTheme = () => {
        root.style.setProperty("--bg-color", "#3C6255")
        root.style.setProperty("--primary-color", "#61876E")
        root.style.setProperty("--secondary-color", "#A6BB8D")
        root.style.setProperty("--terciary-color", "#EAE7B1")
        root.style.setProperty("--contrast-color", "#f5f5f5")
    }

    const orangeTheme = () => {
        root.style.setProperty("--bg-color", "#F76E11")
        root.style.setProperty("--primary-color", "#FF9F45")
        root.style.setProperty("--secondary-color", "#FFBC80")
        root.style.setProperty("--terciary-color", "#FC4F4F")
        root.style.setProperty("--contrast-color", "#f5f5f5")
    }

    const purpleTheme = () => {
        root.style.setProperty("--bg-color", "#863A6F")
        root.style.setProperty("--primary-color", "#975C8D")
        root.style.setProperty("--secondary-color", "#D989B5")
        root.style.setProperty("--terciary-color", "#FFADBC")
        root.style.setProperty("--contrast-color", "#f5f5f5")
    }

    const brownTheme = () => {
        root.style.setProperty("--bg-color", "#1A120B")
        root.style.setProperty("--primary-color", "#3C2A21")
        root.style.setProperty("--secondary-color", "#D5CEA3")
        root.style.setProperty("--terciary-color", "#E5E5CB")
        root.style.setProperty("--contrast-color", "#f5f5f5")
    }

    return(
        <section className="themes content-container" data-aos="zoom-in" data-aos-duration="1500">
            <h2>Temas</h2>
            <p>Que tal testar esse layout com alguns temas diferentes? Fique tranquilo! Na sua vez, desenvolveremos um tema com cores personalizadas
                para você.</p>
            <button type="button" className="btn-theme" onClick={blueTheme}>Tema Azul</button>
            <button type="button" className="btn-theme" onClick={greenTheme}>Tema Natureza</button>
            <button type="button" className="btn-theme" onClick={orangeTheme}>Tema Cores Quentes</button>
            <button type="button" className="btn-theme" onClick={purpleTheme}>Tema Roxo</button>
            <button type="button" className="btn-theme" onClick={brownTheme}>Tema Marrom</button>
        </section>
    )
};

export default Themes;