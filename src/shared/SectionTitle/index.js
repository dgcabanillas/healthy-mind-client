import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ text }) => {
  return (
    <Typography
      variant='h4' 
      component='h2' 
      align='center' 
      color='text.secondary' 
      style={{fontWeight: '500'}}
    > { text } </Typography>

  );
};

export default SectionTitle;
