import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Decoradores from '../components/Decoradores';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import CardSection from '../components/CardComponents/CardSection';

import "./styles/Clientes.scss"


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



const Empresas = () => {

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


    return (
    <>
        <header className='header-navbar'>
            <Navbar />
        </header>

        <main>

            <Decoradores />  

            <section className='hero-space-2' id="hero-space">
                <div className='hero-banner'>
                    <h1>Clientes</h1>
                </div>
            </section>

            <section className='servicios-section'>
                <CardSection cardInfo={randomOrder} category={"Empresas"} />
            </section>

        </main>

        <footer>
          <Footer />
        </footer>
    </>
    );
}


export default Empresas;