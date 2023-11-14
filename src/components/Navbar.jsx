import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


import './styles/Navbar.scss';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuIcon = menuOpen ? "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/closeMenu-Icon.svg" : "https://s3.amazonaws.com/globaltech.la/Recursos+GlobalTech/General/openMenu-.svg"

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Agregar un efecto para desactivar el menú en pantallas más grandes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Agregar un event listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Agregar un event listener para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    // Agregar un event listener para el documento principal
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className='navbar-space'>
        <nav className='navbar-desktop'>
            <aside className='navlogo-space'>
                <Link to={"/#"} onClick={scrollToTop}>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/gpbL-logo-navbar.svg" alt="navlogo" />
                </Link>
            </aside>

            <aside className='navlinks-space'>
                <div className='navLinks'>
                    <NavLink to={'/'} activeClassName="active" onClick={scrollToTop}
                    > 
                        Inicio
                    </NavLink>

                    <NavLink to={'/servicios'} activeClassName="active" onClick={scrollToTop}>  
                        Servicios
                    </NavLink>

                    <NavLink to={'/nosotros'} activeClassName="active" onClick={scrollToTop}>  
                        Nosotros
                    </NavLink>

                    <NavLink to={'/ubicaciones'} activeClassName="active" onClick={scrollToTop}>  
                        Ubicaciones
                    </NavLink>

                    <NavLink to={'/contacto'} activeClassName="active" onClick={scrollToTop}>  
                        Contacto
                    </NavLink>
                </div>

                <div className='navSupport'>
                    <Link>
                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/audifonos-navbar.svg" alt="audifonosIcon" />
                    </Link>

                    <Link>
                        <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/global-navbar.svg" alt="globalIcon" />
                    </Link>
                </div>
            </aside>

            <aside className='navservices-space'>
                <Link to={"/#"}>
                    <h3>Cotiza <span>HOY</span></h3>
                    <img src="https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/General/cotizaBtn-navbar.svg" alt="cotizaBtn" />
                </Link>
            </aside>
        </nav>

        <nav className='navbar-movil'>

        </nav>
    </header >
  );
};

export default Navbar;