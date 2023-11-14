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
        </main>

        <footer>

        </footer>
    </>
    );
}


export default Home;
