import React from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import CardLayout from '../CardLayout';
import ContentInformation from './components/ContentInformation';
import AppointmentButton  from './components/AppointmentButton';

const UserBasicInformation = ({ user }) => {
  return (
    <CardLayout>
      <CardMedia 
        component='img'
        alt='user profile background'
        image={ user.profile.background }
      />
      <CardContent>
        <div style={{marginTop: -60}}>
          <div style={{ display: 'flex' }}>
            <ContentInformation user={user}/>
            <AppointmentButton text='Separar cita' user={user}/>
          </div>
          <Typography 
            variant="caption" 
            display="block"
            style={{ fontSize: 12 }}
          >{ user.description }</Typography>
        </div>
      </CardContent>
    </CardLayout>
  )
}

export default UserBasicInformation;
