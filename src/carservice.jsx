import React, { useState } from 'react';
// import './App.css';

const Carservice = () => {
  const [value, setvalue] = useState();
  const [brand, setbrand] = useState(value);
  const [number, setnumber] = useState();
  const [savenumber, setsavenumber] = useState();
  const checkprice = (event) => {
    event.preventDefault();
    setbrand(value);
    setsavenumber(number);
  };
  return (
    <>
      <div className='todo'>
        <h1>the best car service</h1>
        <h3>get instant service</h3>
        <form onSubmit={checkprice}>
          <select
            name=''
            id=''
            onChange={(event) => setvalue(event.target.value)}
          >
            <option value='hondacity'>hondacity</option>
            <option value='maruti'>maruti</option>
            <option value='ford'>ford</option>
            <option value='datsun'>datsun</option>
            <option value='mahindra'>mahindra</option>
            <option value='hyunda'>hyunda</option>
            <option value='chevrolet'>chevrolet</option>
            <option value='daewoo'>daewoo</option>
          </select>
          <div>
            <input
              type='number'
              onChange={(event) => setnumber(event.target.value)}
            />
          </div>

          <div>
            <button type='submit'>CHECKPRICE</button>
          </div>
        </form>
        <h1>
          {brand} and conctact no is {savenumber}
        </h1>
      </div>
    </>
  );
};
export default Carservice;
