import React, { useState, useEffect } from 'react';
import './styles/Slider.scss';



// este componente define el contenido del panel, Slider 1 (Hero del Home Page)
const InfoHeroHome = ({ dataSlider }) => {

  const showText1 = dataSlider.id >= 0 && dataSlider.id <= 1;
  const showText2 = dataSlider.id >= 2 && dataSlider.id <= 3;

  return (
        <div className='infoHeroHome-content'> 
          <article className={`text1 ${showText1 ? 'visible' : 'hidden'}`}>
            <p>
              <span>GPB Logistic</span> nació de la <span>necesidad</span> al darnos cuenta de las limitadas 
              opciones de logística de <span>calidad</span> en Guatemala, nos propusimos redefinir los estándares.
            </p>

            <p>
              Hoy no somos <span>solo</span> una empresa de transporte de carga, buscamos ser 
              tu <span>socio</span> logístico a <span>largo plazo</span>.
            </p>
          </article>

          <article className={`text2 ${showText2 ? 'visible' : 'hidden'}`}>
            <p>
              <span>Logística</span> sin Contratiempos, <span>Compromiso Incansable</span> en un mundo 
              donde la logística debería ser la última de tus preocupaciones, 
              estamos aquí para asumir la <span>responsabilidad</span>.
            </p>
          </article>          
        </div>

  );
};
  
      



const Panel = ({ panelInfo, dataSlider, activeID }) => {

    const panelClassName = `panel${panelInfo ? `-${panelInfo}` : ''}`;

    return (
        <aside className={panelClassName}>

        {panelInfo === 'heroHome' && <InfoHeroHome dataSlider={dataSlider[activeID]} />}

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
    setWrapperStyle({ 
      backgroundImage: `url('${dataSlider[id].img}')` });
  };

  // modifica el estilo del panel.aside en funcion del panelInfo
  


  // script que define el cambio de id del slider por periodos de tiempo 
  useEffect(() => {
    const interval = setInterval(() => {
      const nextID = (activeID + 1) % dataSlider.length;
      changeActive(nextID);
    }, 10000); 

    return () => {
      clearInterval(interval); 
    };
  }, [activeID]); // Se ejecuta cada vez que activeID cambia


  return (
    <section className="wrapper" style={wrapperStyle}>
      {activeID !== undefined && (
      <Panel dataSlider={dataSlider} panelInfo={panelInfo} activeID={activeID} />
    )}

    {panelInfo === "heroHome" && <div className='overlay-wrapper'></div>}

    
    </section>
  );
};

export default Slider;
