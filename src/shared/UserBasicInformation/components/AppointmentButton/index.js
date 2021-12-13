import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const AppointmentButton = ({ user, text }) => {
  return (
    <div>
      <Button 
        size="small"
        variant="contained"
        color="secondary"
        style={{ marginTop: 50, fontSize: 10 }}
      >{ text }</Button>
    </div>
  )
}

export default AppointmentButton;
