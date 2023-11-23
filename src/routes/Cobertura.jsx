import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardComponents/CardSection';
import TestimonialsCarousel from '../components/Carrusel';
import CarruselSwipper from '../components/CarruselSwipper.jsx';
import ScrollContainer from '../components/ScrollContainer.jsx';

import "./styles/Cobertura.scss"



const cardInfo = [
    {
        id: 0,
        text: "Waltmart",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Walmart-logo.png",
        link: "",
    },
    {
        id: 1,
        text: "Evergreen",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Evergreen-logo.png",
        link: "",
    }, 
    {
        id: 2,
        text: "Puma",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Puma-logo.png",
        link: "",
    },
    {
        id: 3,
        text: "MAERSK",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Maersk-logo.png",
        link: "",
    },
    {
        id: 4,
        text: "MSC",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/MSC_logo.png",
        link: ""
    },
    {
        id: 5,
        text: "CMA",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/CMA-logo.png",
        link: "",
    },
    {
        id: 6,
        text: "C807",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/C807-logo.png",
        link: "",
    },
    {
        id: 7,
        text: "Sealand",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Sealand-logo.png",
        link: "",
    },
    {
        id: 8,
        text: "UNO",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/UNO-logo.png",
        link: "",
    },
    {
        id: 9,
        text: "Hamburg",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/Hamburg-logo.png",
        link: "",
    },
    {
        id: 10,
        text: "UMA",
        imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Clientes/UMA-logo.png",
        link: "",
    },
    
]



const Cobertura = () => {

    const [randomOrder, setRandomOrder] = useState([]);

    useEffect(() => {
        // Función para generar un orden aleatorio de las empresas
        const generateRandomOrder = () => {
        const shuffledOrder = [...cardInfo];
        for (let i = shuffledOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
        }
        setRandomOrder(shuffledOrder);
        };

        // Llamada a la función de generación al montar el componente
        generateRandomOrder();
    }, []); // El segundo argumento [] asegura que se ejecute solo una vez al montar el componente


    const [isClicked, setIsClicked] = useState(false);  
    const buttonText = isClicked ? 'Ver menos' : 'Ver más';
    const buttonClassName = isClicked 
        ? 'is-clicked'
        : '';

    const handleClick = () => {
        setIsClicked(!isClicked)
      };

    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2' id="hero-space">
                <div className='hero-banner-cobertura'>
                    <h1>Cobertura Geográfica</h1>
                </div>
            </section>

            <section className='ubicaciones-section'>
                <aside className='ubicaciones-space'>
                    <div className='article-space'>
                        <article>
                            <h2>HORIZONTES EXTENDIDOS</h2>

                            

                            {!isClicked && (
                                <div>
                                    <p>
                                        En GPB Logistic, nos enorgullece servir a Guatemala, 
                                        siendo su socio logístico de confianza. Aquí, en nuestra tierra natal, 
                                        establecemos el estándar para la excelencia en transporte de carga...
                                    </p>
                                </div>
                            )}

                            {isClicked && (
                                <div>
                                    <ScrollContainer />
                                </div> 
                            )}
                            

                            

                            <button onClick={handleClick} className={buttonClassName}>
                                <span>{buttonText}</span>
                            </button>
                        </article>

                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Cobertura/Camion-img.png" alt="camion-img" />
                    </div>

                    <div className='map-space'>
                        
                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Cobertura/Mapa-CentroAmerica.png" alt="map-centroamerica-img" />
                   
                    </div>
                </aside>
            </section>

            <section className='testimonios-section'>
                <article className='title'>
                    <h1>TESTIMONIOS</h1>
                </article>

                <aside className='testimonios-space'>

                  <CarruselSwipper /> 

                </aside>
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Cobertura;