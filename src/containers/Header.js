import React from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ mt: 20 }}>
        <Typography variant="h4" className={classes.title}>
          fakeshop
        </Typography>
      </AppBar>
    </div>
  );
};

export default Header;
