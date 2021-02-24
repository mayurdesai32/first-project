import React, { useState } from 'react';
import {
  Grid,
  Paper,
  MenuItem,
  Select,
  Button,
  TextField,
} from '@material-ui/core';
// import from './App.css'
const Form = () => {
  const [value, setvalue] = useState();
  const [brand, setbrand] = useState(value);
  const [number, setnumber] = useState();
  const [savenumber, setsavenumber] = useState();
  const checkprice = (event) => {
    event.preventDefault();
    setbrand(value);
    setsavenumber(number);
  };
  const paper = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20vh auto',
    // position: 'sticky',

    // position: '-webkit-sticky' /* Safari */,
    // bottom: 0,
  };
  return (
    <>
      <Grid align='center'>
        <Paper elevation={10} style={paper}>
          <h1>The best car service</h1>
          <h3>get instant quotes</h3>

          <div>
            <Select
              value=''
              displayEmpty
              onChange={(event) => setvalue(event.target.value)}
            >
              <MenuItem value='' disabled>
                <em>None</em>
              </MenuItem>
              <img src='' alt='' />
              <MenuItem value={10}>
                <img
                  src='https://www.carlogos.org/car-logos/tesla-logo.png'
                  alt=''
                />
              </MenuItem>
              <MenuItem value={44}>
                <img
                  src='https://www.carlogos.org/car-logos/ford-logo.png'
                  alt=''
                />
              </MenuItem>
              <MenuItem value={30}>
                <img
                  src='https://www.carlogos.org/car-logos/chevrolet-logo.png'
                  alt=''
                />
              </MenuItem>
            </Select>
          </div>
          <div>
            <TextField
              id='standard-number'
              label='Number'
              type='number'
              maxlength={5}
              fullWidth
              onChange={(event) => setnumber(event.target.value)}
            />
          </div>
          <br />

          <div>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              onClick={checkprice}
            >
              CHECKPRICE
            </Button>
          </div>
          <h1>
            {brand} and conctact no is {savenumber}
          </h1>
        </Paper>
      </Grid>
    </>
  );
};
export default Form;
