import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/CarruselSwipper.scss';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const slidesData = [
    {
      id: 0,
      title: 'EVERGREEN',
      subtitle: 'tiendas',
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
    },
    {
        id: 1,
        title: 'EVERGREEN',
        subtitle: 'tiendas',
        image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
    },
    {
        id: 2,
        title: 'EVERGREEN',
        subtitle: 'tiendas',
        image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
    },
    {
        id: 3,
        title: 'EVERGREEN',
        subtitle: 'tiendas',
        image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
    },
    {
        id: 4,
        title: 'EVERGREEN',
        subtitle: 'tiendas',
        image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat',
    },
    // Agrega más objetos para cada slide según sea necesario
  ];

  const CarruselSwipper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };
  
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        /* navigation={true} */
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-testimonials"
        onSlideChange={handleSlideChange}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={`card text-center ${activeIndex === index ? 'active' : ''}`}>
              <img className="card-img-top" src={slide.image} alt="" />
              <div className="card-body">
                <h5>
                  {slide.title} <br />
                  <span>{slide.subtitle}</span>
                </h5>
                <p className="card-text">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default CarruselSwipper;