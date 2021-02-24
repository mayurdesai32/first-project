// import { useState } from 'react';
import './App.css';
import React, { useState } from 'react';

const Todolist = () => {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState([]);

  const inputtext = (event) => {
    setinput1(event.target.value);
  };
  const add = () => {
    setinput2((old) => {
      return [input1, ...old];
    });
    setinput1('');
  };

  const del = (indexnumber) => {
    setinput2((old) => {
      return old.filter((element, index) => {
        return index !== indexnumber;
      });
    });
  };
  return (
    <>
      <div className='todo'>
        <h1>Todolist</h1>

        <div>
          <input
            type='text'
            placeholder='enter the text'
            onChange={inputtext}
            value={input1}
          />
          <button type='submit' onClick={add}>
            add
          </button>
          {input2.map((Element, index) => {
            return (
              <h2>
                <button type='submit' onClick={() => del(index)}>
                  del
                </button>
                {Element}
              </h2>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Todolist;
