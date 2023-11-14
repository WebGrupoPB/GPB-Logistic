import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Decoradores from '../components/Decoradores';
import Slider from '../components/Slider';


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

                            </div>

                            <div className='valor-item'>

                            </div>

                            <div className='valor-item'>

                            </div>

                            <div className='valor-item'>

                            </div>
                        </div>
                    </div>

                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/propuesta/propuesta-joven-img.png" alt="" className='persona-img'/>
                </aside>
            </section>

            <div className='space-margin'>

            </div>
        </main>

        <footer>

        </footer>
    </>
    );
}


export default Home;
