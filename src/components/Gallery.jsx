import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './styles/Gallery.scss';

const Galleria = ({ slides }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [state, setState] = useState({
    activeSlide: -1,
    prevSlide: -1,
    sliderReady: false,
  });

  let changeTO = null;

  useEffect(() => {
    runAutochangeTO();
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, activeSlide: 0, sliderReady: true }));
    }, 0);

    return () => {
      window.clearTimeout(changeTO);
    };
  }, []);

  const runAutochangeTO = () => {
    changeTO = setTimeout(() => {
      changeSlides(1);
      runAutochangeTO();
    }, AUTOCHANGE_TIME);
  };

  const changeSlides = (change) => {
    window.clearTimeout(changeTO);
    const { length } = slides;
    const prevSlide = state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    setState({ activeSlide, prevSlide });
  };

  const { activeSlide, prevSlide, sliderReady } = state;

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <p className="slider__top-heading">Travelers</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="/* slider__control  */slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  );
};

export default Galleria;




