import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./styles/TestimonialsCarousel.scss"


const TestimonialsCarousel = () => {
  const settings = {
    className: "center",
    /* centerMode: true, */
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="gtco-testimonials">
      <Slider {...settings}>
        <div>
          <div className="card text-center">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
            <div className="card-body">
              <h5>EVERGREEN <br /><span>tiendas</span></h5>
              <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card text-center">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
            <div className="card-body">
              <h5>WALMART <br /><span>tiendas</span></h5>
              <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
            </div>
          </div>
        </div>

        <div>
          <div className="card text-center">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
            <div className="card-body">
              <h5>MAERSK <br /><span>tiendas</span></h5>
              <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ” </p>
            </div>
          </div>
        </div>
          

      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;



