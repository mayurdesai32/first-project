import React, { useState } from 'react';
import './index.css';
const DigitalClock = () => {
  // const currtime = new Date().toLocaleTimeString();
  const [time, settime] = useState();
  setInterval(() => {
    let actualtime = new Date().toLocaleTimeString();
    return settime(actualtime);
  }, 1000);
  return (
    <>
      <div className='header'>
        <h1>Digital Clock</h1>
      </div>
      <div className='div1'>
        <h1 className='time'>{time}</h1>
      </div>
    </>
  );
};
export default DigitalClock;
