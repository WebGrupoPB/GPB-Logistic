import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import GoogleMaps from './GoogleMap';


import './styles/Footer.scss';



const Footer = () => {

  return (
    <footer className='footer-space'>
        <header className='footer-logo'>
            <div className='footer-logo-space'>
                <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/Logo_GPB_Footer.svg" alt="" className='footer-logo-img' />

                <div className='footer-nosotros-text'>
                    <h6>Nosotros</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit posuere, aliquam rutrum eros curabitur 
                        taciti risus commodo, molestie turpis consequat ante aptent primis nam.
                    </p>
                </div>
            </div>
        </header>

        <article className='footer-info'>
            <div className='footer-info-contactos'>
                <h6>Contactanos</h6>

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/phone_icon_Footer.svg" alt="phone-icon" />
                    <p>PBX: 2247-3333</p>
                </span>
                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/phone_icon_Footer.svg" alt="phone-icon" />
                    <p>PBX: 0000-0000</p>
                </span>
            </div>

            <div className='footer-info-ubicaciones'>
                <h6>Ubicaciones</h6>

                <span>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/Footer/gps_icon_Footer.svg" alt="gps-icon" />
                    <p>Calzada Atanasio Tzul 20-11 Z.12</p>
                </span>
            </div>

            <p className='footer-info-copyright'>
                Todos los derechos reservados ©GPB Logistic, 2023 | Desarrolado Grupo PB
            </p>
        </article>

        <aside className='footer-map'>
            {/* <GoogleMaps /> */}
        </aside>
    </footer>
  );

};

export default Footer;