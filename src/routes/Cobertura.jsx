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



const Cobertura = () => {


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
                                        En GPB Logistic, nos enorgullece servir a Guatemala, siendo su socio logístico de confianza. 
                                        Aquí, en nuestra tierra natal, establecemos el estándar para la excelencia en transporte de 
                                        carga. Desde combustible, hasta plataformas para carga sobredimensionada, estamos ahí para 
                                        nuestros clientes.
                                    </p>
                                </div>
                            )}

                            {isClicked && (

                                <div>
                                    <p>
                                        Horizontes Expandidos: Hacia Toda Centroamérica
                                        Pero no nos detenemos aquí. Estamos mirando más allá de las fronteras. 
                                        En el horizonte, vemos a toda Centroamérica como nuestro próximo destino.
                                    </p>
                                    <p>
                                        Imagínese, su carga llevada con la misma dedicación en cada kilómetro, desde Guatemala hasta 
                                        donde su visión de negocios lo lleve.
                                    </p>
                                </div>
                                
                            )}
                            

                            

                            <button onClick={handleClick} className={buttonClassName}>
                                <span>{buttonText}</span>
                            </button>
                        </article>

                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Cobertura/Camion-img.png" alt="camion-img" />
                    </div>

                    <div className='map-space'>
                        
                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Cobertura/mapaMundi.png" alt="map-centroamerica-img" />
                   
                    </div>
                </aside>
            </section>

            <section className='testimonios-section-cobertura'>
                 <article className='title'>
                    <h1>
                        A <span>una</span> llamada y a <span>un</span> contacto para <span>solucionar</span> su logística
                    </h1>
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