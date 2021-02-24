import React, { useEffect, useState } from 'react';
import './App.css';
const Weatherapp = () => {
  const [city, setcity] = useState('pune');
  const [search, setsearch] = useState();
  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fc3bcf4b1ae4ca41fec2258ae712ce3f`;
      const weather = await fetch(url);
      const resJson = await weather.json();
      // console.log(resJson);
      setcity(resJson.city);
      // const temp = await resJson.main.temp;
      // console.log(temp);
      // console.log(resJson.main.temp_min);
      // console.log(resJson.main.temp_max);
      // console.log(resJson.weather.main);
    };
    fetchapi();
  });
  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input
            type='search'
            className='inputFeild'
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>

        <div className='info'>
          <h2 className='location'>
            <i className='fa-street-view '></i>
            {city}
          </h2>
          <h1 className='temp'>{city.main.temp}</h1>
          <h3 className='tempmin_max'>min temp</h3>
        </div>
        <div className='wave'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
    </>
  );
};
export default Weatherapp;
