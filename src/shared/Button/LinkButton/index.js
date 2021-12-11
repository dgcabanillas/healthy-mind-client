import React from 'react';
import Button from '@mui/material/Button';

const LinkButton = ({ text, href }) => {
  return (
    <Button href={href}>{ text }</Button>
  )
}

export default LinkButton;
