import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';
const Newwebsite = () => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            // className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit'>
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <h1>hello world</h1> */}
    </>
  );
};
export default Newwebsite;
