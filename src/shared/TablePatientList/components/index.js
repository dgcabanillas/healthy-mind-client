import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardMedia } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'inline-block',
    marginTop: theme.spacing(2),
    // marginRight: theme.spacing(-5),
    marginBottom: theme.spacing(1),
    // marginLeft: theme.spacing(2),
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor : '#F8F8F8',
  }
}));

const PatientImage = ({ image }) => {
  const classes = useStyles();

  return (
    <CardMedia        
      component= 'img'
      alt= 'user profile image'
      image={image}
      className={classes.image}
    />
  )
}

export default PatientImage;