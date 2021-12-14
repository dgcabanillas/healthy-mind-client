import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.secondary,
  }
}));

const CTitle = ({ text }) => {
  const classes = useStyles();

  return (
    <Typography
      component="h1" 
      variant="h6" 
      color="initial"
      className={classes.title}
      gutterBottom
    >{ text }</Typography>
  )
}

export default CTitle
