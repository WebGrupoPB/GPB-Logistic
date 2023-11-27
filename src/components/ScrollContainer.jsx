import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

/* import './styles.css'; */

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

export default function ScrollContainer() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper-scroll"
      >
        <SwiperSlide className='swipperSlide-scroll' >
          {/* <h4>Scroll Container</h4> */}
          <p>
            En GPB Logistic, nos enorgullece servir a Guatemala, siendo su socio logístico de confianza. 
            Aquí, en nuestra tierra natal, establecemos el estándar para la excelencia en transporte de 
            carga. Desde combustible, hasta plataformas para carga sobredimensionada, estamos ahí para 
            nuestros clientes.
          </p>
          <p>
            Horizontes Expandidos: Hacia Toda Centroamérica
            Pero no nos detenemos aquí. Estamos mirando más allá de las fronteras. 
            En el horizonte, vemos a toda Centroamérica como nuestro próximo destino.
          </p>
          <p>
            Imagínese, su carga llevada con la misma dedicación en cada kilómetro, desde Guatemala hasta 
            donde su visión de negocios lo lleve.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}