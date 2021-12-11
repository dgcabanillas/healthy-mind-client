import React from 'react';
import { Button } from '@mui/material';

const NormalButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>{ text }</Button>
  )
}

export default NormalButton;
