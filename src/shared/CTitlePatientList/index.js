import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.text,
  }
}));

const CTitlePatientList = ({ text }) => {
  const classes = useStyles();

  return (
    <Typography
      component="h1" 
      variant="h2" 
      color= "#8F8F90"
      className = {classes.title}
      gutterBottom
    >{ text }
    </Typography>
  )
}

export default CTitlePatientList;