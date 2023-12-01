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
import Counter from '../components/Counter.jsx';

import "./styles/Servicios.scss"

const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Servicios/SliderServicios/SliderServicios-img-1.png',
      text: "DISTRIBUCIÓN DE PUERTO A PUERTO",
    },
    {
      id: 1,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Servicios/SliderServicios/SliderServicios-img-2.png',
      text: "CABINA DE SEGURIDAD Y MONITOREO",  
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Servicios/SliderServicios/SliderServicios-img-3.png',
      text: "CONTAMOS CON UNA FLOTA MODERNA",  
    },
  ];



const Servicios = () => {


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
                <div className='hero-banner-servicios'>
                    <h1>Servicios</h1>
                </div>
            </section>

            <section className='Servicios-section'>
                <article className='title'>
                    <h1>TIPO DE TRANSPORTE</h1>
                </article>
                
                <aside className='serviciosContent-space'>
                    <div className='servicioContent-card'>
                        <header className='servicio-title'>
                            <h3>lTL</h3>
                            <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Servicios/LTL-img.png" alt="LTL-img" />
                        </header>

                        <article className='servicio-text'>
                            <p>
                                LTL se refiere a "Less Than Truckload"; Este término se refiere a un tipo de 
                                envío de mercancías que no ocupa todo el espacio de carga de un camión.
                            </p>
                        </article>
                    </div>

                    <div className='servicioContent-card'>
                        <header className='servicio-title'>
                            <h3>FTL</h3>
                            <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Servicios/FTL-img.png" alt="FTL-img" />
                        </header>

                        <article className='servicio-text'>
                            <p>
                                FTL se refiere a “Full Truck Load”; Este término se utiliza en el ámbito del 
                                transporte y la logística para describir un envío de mercancías que ocupa todo el 
                                espacio de carga disponible en un camión.
                            </p>
                        </article>
                    </div>
                </aside>
            </section>

            <section className='sliderServicios-section'>
                <div className='hero-slider'>
                  <Slider dataSlider={dataHero} panelInfo='servicios' />
                </div>
            </section>


            <section className='cifrasServicios-section'>
              <article className='title'>
                <h1>GPB LOGISTIC EN CIFRAS</h1>
              </article>

              <aside className='cifras-space'>
                  <div className='cifra-item'>
                    <p><Counter numLimit={115}/> <span className='spanText'>unidades</span></p>
                    <h3>UNIDADES MOTORIZADAS</h3>
                  </div>

                  <div className='cifra-item'>
                    <p><Counter numLimit={95}/> <span className='spanText'>unidades</span></p>
                    <h3>PIPAS DE 1,000/9,200 <span>galones</span></h3>
                  </div>

                  <div className='cifra-item'>
                    <p><Counter numLimit={20}/>,<Counter numLimit={40}/> y <Counter numLimit={45}/> <span className='spanText'>ft</span></p>
                    <h3>PORTACONTENEDORES</h3>
                  </div>

                  <div className='cifra-item'>
                    <p><Counter numLimit={48}/> y <Counter numLimit={53}/> <span className='spanText'>ft</span></p>
                    <h3>FURGONES Y PLATAFORMAS</h3>
                  </div>
              </aside>
            </section> 


            {/* <section className='testimonios-section-servicios'>
                 <article className='title'>
                    <h1>
                    </h1>
                </article>

                <aside className='testimonios-space'>

                  <CarruselSwipper /> 

                </aside>
            </section> */}

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Servicios;