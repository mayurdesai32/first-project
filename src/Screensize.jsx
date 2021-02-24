import React, { useEffect, useState } from 'react';

const Screensize = () => {
  const [width1, setwidth1] = useState(window.screen.width);

  const [height1, setheight1] = useState(window.screen.height);
  const actualwidth = () => {
    return setwidth1(window.innerWidth);
  };
  const actualheight = () => {
    return setheight1(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', actualwidth);
    window.addEventListener('resize', actualheight);
  });
  return (
    <>
      <h1>{`${height1} * ${width1}`}</h1>
    </>
  );
};
export default Screensize;
