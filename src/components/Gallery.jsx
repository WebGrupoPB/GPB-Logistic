import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles/Gallery.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const slidesData = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
  'https://swiperjs.com/demos/images/nature-9.jpg',
  'https://swiperjs.com/demos/images/nature-10.jpg',
];

const Galleria = () => {
  /* const thumbsSwiper = useRef(null); */
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}

        /* thumbs={{ swiper: thumbsSwiper.current }} */
        thumbs={{ swiper: thumbsSwiper }}

        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        /* onSwiper={(swiper) => (thumbsSwiper.current = swiper)} */
        onSwiper={setThumbsSwiper}

        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Thumb ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Galleria;







