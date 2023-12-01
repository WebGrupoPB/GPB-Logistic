import React, {useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

import Navbar from '../components/Navbar';
import AnimatedTitle from '../components/AnimationTrigger';
import Decoradores from '../components/Decoradores';
import Slider from '../components/Slider';
import Galleria from '../components/Gallery'
import CardSection from '../components/CardComponents/CardSection';
import Counter from '../components/Counter';
import TestimonialsCarousel from '../components/Carrusel';
import CarruselSwipper from '../components/CarruselSwipper';
import Footer from '../components/Footer';

import "./styles/Home.scss"

const cardInfo = [
  {
    id: 0,
    title: "La Seguridad es lo Primero",
    text: "Nos comprometemos a crear un entorno laboral seguro para que todos regresen a casa en la misma o mejor condición en que llegaron.",
    imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/seguridad-valoresIcon.png"
  },
  {
    id: 1,
    title: "Procesos Fáciles y Claros",
    text: "Queremos que la experiencia de trabajar con nosotros sea amigable y sin complicaciones.",
    imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/procesos-valoresIcon.png"
  },
  {
    id: 2,
    title: "Eficiencia Operativa",
    text: "Buscamos constantemente maneras de mejorar procesos. Nos preguntamos regularmente: ¿Es esta la manera más eficiente de realizar la tarea?",
    imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/eficiencia-valoresIcon.png"
  },
  {
    id: 3,
    title: "Relaciones laborales",
    text: "No buscamos solo clientes, sino socios de confianza. Forjamos relaciones sólidas basadas en la transparencia y el compromiso.",
    imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/relaciones-valoresIcon.png"
  },
  {
    id: 4,
    title: "Innovación Tecnológica",
    text: "Nos apasiona la innovación tecnológica. Utilizamos la tecnología para resolver problemas y mejorar su experiencia con nosotros.",
    imageURL: "https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/innovacion-valoresIcon.png"
  },
 
]


const dataHero = [
    {
      id: 0,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img1.jpeg',
    },
    {
      id: 1,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img2.jpeg',
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img3.jpeg',
    },
    {
      id: 3,
      img: 'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img4.jpeg',
    },
  ];






const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define la altura en vh a partir de la cual los decoradores deben aparecer
  const thresholdVh = 100;

  // Calcula si los decoradores deben aparecer o desaparecer
  const shouldShowDecoradores = scrollPosition > window.innerHeight * thresholdVh / 100;


  // Usa useInView para detectar la visibilidad del elemento
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa una vez
    threshold: 0.5, // Personaliza el umbral según tus necesidades
  });

  // Aplica una clase si el elemento está en la vista
  const titleClass = inView ? 'visible' : 'hidden';



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
                <h1 ref={ref} className={titleClass}>PROPUESTAS DE VALOR</h1>
              </article>

                <aside className='propuesta-space'>
                    <div className='valoresOverlay-space'>
                        <div className='valores-space'>
                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/soluciones-propuesta-img.svg" alt="" />

                              <h3>Soluciones Integrales</h3>

                              <p>Con usted desde la planificación hasta la entrega.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/atencion-propuesta-img.svg" alt="" />

                              <h3>Atención Personalizada</h3>

                              <p>Una llamada y un contacto resuelven cualquier desafío logístico.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/innovacion-propuesta-img.svg" alt="" />

                              <h3>Innovación Simplificada</h3>

                              <p>Operaciones más eficientes y su logística más sencilla.</p>
                            </div>

                            <div className='valor-item'>
                              <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/confianza-propuesta-img.svg" alt="" />

                              <h3>Confianza Transparente</h3>

                              <p>Su socio logístico a largo plazo.</p>
                            </div>
                        </div>
                    </div>

                    {/* <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/propuesta-joven-img.png" alt="" className='persona-img'/> */}
                </aside>
            </section>

            <section className='gallery-section'>
                <article className='title'>
                    <h1>
                      Enfóquese en lo que usted es bueno, 
                      <span> nosotros nos encargamos de su logística</span>
                    </h1>
                </article>
            
                <Galleria />
            </section>


            <section className='valores-section'>
                <article className='title'>
                    <h1>VALORES CORPORATIVOS</h1>
                </article>

                <div className='valores-space'>
                    <aside className='valores-marco'>
                      <div className='valores-info-space'>
                        <CardSection cardInfo={cardInfo} category={"Valores"} />
                      </div>

                      <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/valores/FondoValores-img.png" alt="fondo-valores-img" />
                    </aside>
                </div>
            </section>

            <section className='cifras-section'>
              <article className='title'>
                <h1>GPB LOGISTIC EN CIFRAS</h1>
              </article>

              <aside className='cifras-space'>
                  <div className='cifra-item'>
                      <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/contador/contador-img1.svg" alt="contador-icon-combustible" />
                      <h4>Combustible</h4>
                      <Counter numLimit={45000000}/>
                      <span className='span-cifra'>galones</span>
                  </div>

                  <div className='cifra-item'>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/contador/contador-img2.svg" alt="contador-icon-contenedores" />
                    <h4>Contenedores</h4>
                    <Counter numLimit={6700}/>
                    <span className='span-cifra'>unidades</span>
                  </div>

                  <div className='cifra-item'>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/contador/contador-img3.svg" alt="contador-icon-asfalto" />
                    <h4>Asfalto</h4>
                    <Counter numLimit={15000000}/>
                    <span className='span-cifra'>galones</span>
                  </div>

                  <div className='cifra-item'>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/contador/contador-img2.svg" alt="contador-icon-paquetes" />
                    <h4>Entregas</h4>
                    <Counter numLimit={60000}/>
                    <span className='span-cifra'>paquetes</span>
                  </div>
              </aside>
            </section>

            {/* <section className='testimonios-section'>
              <article className='title'>
                  <h1>TESTIMONIOS</h1>
              </article>

              <aside className='testimonios-space'>
                <CarruselSwipper /> 
              </aside>
            </section> */}

            

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
