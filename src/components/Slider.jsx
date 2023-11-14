import React, { useState, useEffect } from 'react';
import './styles/Slider.scss';



// este componente define el contenido del panel, Slider 1 (Hero del Home Page)
const InfoHeroHome = ({ dataSlider }) => ( 
      <div className='infoHeroHome-content'>     
          <p>
            {dataSlider.text1}
          </p>

          <p>
            {dataSlider.text2}
          </p>       
      </div>
);



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
    setWrapperStyle({ backgroundImage: `url('${dataSlider[id].img}')` });
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
