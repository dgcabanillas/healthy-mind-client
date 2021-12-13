import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardMedia } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  }
}));

const ProfileImage = ({ image }) => {
  const classes = useStyles();

  return (
    <CardMedia 
      component='img'
      alt='user profile image'
      image={image}
      className={classes.image}
    />
  )
}

export default ProfileImage
