import React, {useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';


const AnimatedTitle = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true, // La animación solo se activa una vez
    });
  
    return (
      <article className='title' ref={ref}>
        <h1 className={inView ? 'animate' : ''}>{children}</h1>
      </article>
    );
  };

export default AnimatedTitle