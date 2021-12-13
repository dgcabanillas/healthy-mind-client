import React from 'react';
import { Typography } from '@mui/material';
import ProfileImage from '../ProfileImage';

const ContentInformation = ({ user }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <ProfileImage image={ user.profile.image } />
      <Typography 
        variant="h6" 
        component="h1"
      >{ user.name }</Typography>
      <Typography 
        gutterBottom 
        variant="subtitle2" 
        component="p" 
        color="text.secondary"
      >{ user.speciality }</Typography>
    </div>
  )
}

export default ContentInformation;
