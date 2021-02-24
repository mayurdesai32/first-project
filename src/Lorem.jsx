import { useState } from 'react';
import data from './Loremdata';

const Lorem = () => {
  const [count, setcount] = useState(0);
  const [gencount, setgencount] = useState();
  const [text, settext] = useState([]);

  return (
    <>
      <h1>lorem ispsun paragrap generator</h1>
      <h1>
        <label htmlFor='howmuch'> paragrap</label>
        <input
          type='number'
          id='howmuch'
          maxlength='8'
          minlength='1'
          onChange={(events) => {
            setcount(events.target.value);
          }}
        />
      </h1>
      <button
        type='submit'
        onClick={() => {
          let num = parseInt(count);
          return settext(data);
        }}
      >
        generate
      </button>
      <article>
        {text.map((element, index) => {
          return <p key={index}>{element}</p>;
        })}
      </article>
      <h1>{count}</h1>
    </>
  );
};
export default Lorem;
