import React, { useRef, useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles/Gallery.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const slidesData = [
  'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img1.jpeg',
  'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img2.jpeg',
  'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img3.jpeg',
  'https://s3.amazonaws.com/gpblogistic.com/Recursos-GPB-Logistic/Home/sliderHome/sliderHome-img4.jpeg',
];


const Galleria = () => {
  const thumbsSwiper = useRef(null);


  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}

        thumbs={{ swiper: thumbsSwiper.current }} //opcion de useRef
        /* thumbs={{ swiper: thumbsSwiper }} */ //opcion de useState y useEffect
        loop={true}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2-gallery"
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='mySwiper2-img'/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => (thumbsSwiper.current = swiper)} //opcion de useRef
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-gallery"
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Thumb ${index + 1}`} className='mySwiper1-img'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Galleria;







