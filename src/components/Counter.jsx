import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ numLimit }) => {
  return (
    <div className='counter'>
      <CountUp end={numLimit} duration={5} />
    </div>  
  );
};

export default Counter;
