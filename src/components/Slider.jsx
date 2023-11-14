import React, { useState, useEffect } from 'react';
import './styles/Slider.scss';



// este componente define el contenido del panel, Slider 1 (Hero del Home Page)
const InfoHeroHome = () => ( 
      <div className='infoHeroHome-content'>

        <div className='title-content'>
          <h1>Tienda de Equipos y Herramientas Automotrices</h1>
        </div>
        
        <div className='parrafo-content'>
          <p>
            En nuestro espacio, celebramos el apasionante mundo de la mecánica.
          </p>
          <p>
            Descubre la amplia gama de productos que ofrecemos, desde herramientas y repuestos hasta accesorios y equipo de alta calidad.
            Atendemos la demanda ya sea de entusiastas del automovilismo, mecánicos profesionales o aficionados.
          </p>
          <p>
            <b>
              ¡Te invitamos a explorar nuestro catálogo y satisfacer tus necesidades de equipo y herramientas con la máxima calidad y variedad, respaldada por más de 23 años de experiencia en la industria!
            </b>
          </p>
          <p>
            Ofrecemos los mejores precios del mercado y una atención al cliente excepcional. Descubre la mejor calidad en mecánica con nosotros.
          </p>
        </div>
        
      </div>
);



const Panel = ({ panelInfo, dataSlider, activeID }) => {

  return (
    <aside className="panel">

      {panelInfo === 'heroHome' && <InfoHeroHome />}

    </aside>
  );

};




const Slider = ({ dataSlider, panelInfo }) => {


    // defineel background img inicial del slider
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url('${dataSlider[0].img}')`,
    
  });


  // cambia el background del slider por el id
  const changeActive = (id) => {
    setActiveID(id);
    setWrapperStyle({ backgroundImage: `url('${dataSlider[id].img}')` });
  };

  // modifica el estilo del panel.aside en funcion del panelInfo
  


  // script que define el cambio de id del slider por periodos de tiempo 
  useEffect(() => {
    const interval = setInterval(() => {
      const nextID = (activeID + 1) % dataSlider.length;
      changeActive(nextID);
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, [activeID]); // Se ejecuta cada vez que activeID cambia


  return (
    <section className="wrapper" style={wrapperStyle}>
      {activeID !== undefined && (
      <Panel dataSlider={dataSlider} panelInfo={panelInfo} activeID={activeID} />
    )}

    {panelInfo !== "heroHome" && <div className='overlay-wrapper'></div>}

    
    </section>
  );
};

export default Slider;
