import React, {useState} from 'react';
import { Link } from 'react-router-dom';
/* import { Element, scroller } from 'react-scroll'; */

import Navbar from '../components/Navbar';
import Decoradores from '../components/Decoradores';
import Slider from '../components/Slider';
import Galleria from '../components/Gallery'
import TestimonialsCarousel from '../components/Carrusel';
import Footer from '../components/Footer';


import "./styles/Home.scss"

const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img1.jpeg',
      text1: "En GPB Logistic, nacimos de la necesidad. Al darnos cuenta de las limitadas opciones de logística de calidad en Guatemala, nos propusimos redefinir los estándares",
      text2: "Hoy, no somos simplemente una empresa de transporte de carga; buscamos ser tu socio logístico a largo plazo",
    },
    {
      id: 1,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img2.jpeg',
      text1: "En GPB Logistic, nacimos de la necesidad. Al darnos cuenta de las limitadas opciones de logística de calidad en Guatemala, nos propusimos redefinir los estándares",
      text2: "Hoy, no somos simplemente una empresa de transporte de carga; buscamos ser tu socio logístico a largo plazo",
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img3.jpeg',
      text1: "Logística sin Contratiempos, Compromiso Incansable en un mundo donde la logística debería ser la última de tus preocupaciones, estamos aquí para asumir la responsabilidad.",
      text2: "Trabajamos incansablemente, día tras día, para descubrir alternativas innovadoras, comprometidos con la mejora continua tanto en la excelencia del servicio para nuestros clientes como en la calidad de vida de nuestro equipo.",
    },
    {
      id: 3,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img4.jpeg',
      text1: "Logística sin Contratiempos, Compromiso Incansable en un mundo donde la logística debería ser la última de tus preocupaciones, estamos aquí para asumir la responsabilidad.",
      text2: "Trabajamos incansablemente, día tras día, para descubrir alternativas innovadoras, comprometidos con la mejora continua tanto en la excelencia del servicio para nuestros clientes como en la calidad de vida de nuestro equipo.",
    },
  ];

  const slides = [
    {
      city: 'París',
      country: 'Francia',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Singapur',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
    },
    {
      city: 'Praga',
      country: 'República Checa',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    // Agrega más elementos según sea necesario
  ];


const Home = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


    return (
    <>
       <header className='header-navbar'>
            <Navbar />
        </header>

        <main>
            <Decoradores />

            <section className='hero-space' id="hero-space">
                <div className='hero-slider'>
                  <aside className='hero-title'>
                    <h1>Bienvenidos a GPB Logistic</h1>
                    <div></div>
                  </aside>

                  <Slider dataSlider={dataHero} panelInfo='heroHome' />
                </div>
            </section>

            <section className='propuesta-section'>
                <article className='title'>
                    <h1>PROPUESTAS DE VALOR</h1>
                </article>

                <aside className='propuesta-space'>
                    <div className='valoresOverlay-space'>
                        <div className='valores-space'>
                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/soluciones-propuesta-img.svg" alt="" />

                              <h3>Soluciones Integrales</h3>

                              <p>Comprometidos con ser su único punto de contacto para todas las necesidades logísticas, desde la planificación hasta la entrega.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/atencion-propuesta-img.svg" alt="" />

                              <h3>Atención Personalizada</h3>

                              <p>Procesos diseñados con usted en mente. Una llamada y un contacto resuelven cualquier desafío logístico.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/innovacion-propuesta-img.svg" alt="" />

                              <h3>Innovación Simplificada</h3>

                              <p>Integramos tecnología de vanguardia para hacer sus operaciones más eficientes y su logística más sencilla.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/confianza-propuesta-img.svg" alt="" />

                              <h3>Confianza Transparente</h3>

                              <p>Construimos relaciones sólidas basadas en la transparencia y la integridad.</p>
                            </div>
                        </div>
                    </div>

                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/propuesta-joven-img.png" alt="" className='persona-img'/>
                </aside>
            </section>

            <section className='gallery-section'>
                <article className='title'>
                    <h1>
                      Enfóquese en lo que usted es bueno, 
                      <span> nosotros nos encargamos de su logística</span>
                    </h1>
                </article>

                <aside className='gallery-space'>
                  <div>
                    <Galleria slides={slides} />
                  </div>                 
                </aside>
            </section>


            <section className='valores-section'>
                <article className='title'>
                    <h1>VALORES CORPORATIVOS</h1>
                </article>

                <div className='valores-space'>
                    <aside className='valores-fondo'>
                      <div className='overlay-valores'>
                        <div className='valores-info-space'>
                          <article className='valores-info'>
                            <h3>La Seguridad es lo Primero</h3>

                            <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/seguridadIcon.png" alt="seguridadIcon" />

                            <p>
                              Nos comprometemos a crear un entorno laboral seguro para que todos regresen a 
                              casa en la misma o mejor condición en que llegaron. 
                            </p>
                          </article>

                          <div className='line-divide'></div>

                          <article className='valores-info'>
                            <h3>Procesos Fáciles y Claros</h3>

                            <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/procesosIcon.png" alt="procesosIcon" />

                            <p>                         
                              Diseñamos cada proceso con usted en mente. Queremos que la experiencia de 
                              trabajar con nosotros sea amigable y sin complicaciones.
                            </p>
                          </article>
                        </div>                       
                      </div>
                    </aside>
                </div>
            </section>

            <section className='testimonios-section'>
                <article className='title'>
                    <h1>TESTIMONIOS</h1>
                </article>

                <aside className='testimonios-space'>

                  <TestimonialsCarousel /> 

                </aside>
            </section>

            

            {/* <div className='space-margin'>

            </div> */}
            
        </main>

        <footer>
          <Footer/>
        </footer>
    </>
    );
}


export default Home;
