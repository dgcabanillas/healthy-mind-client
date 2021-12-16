import React from 'react'
import Container    from '@mui/material/Container';
import Grid         from '@mui/material/Grid';
import CardContent  from '@mui/material/CardContent';
import HomeLayout   from '../../../components/layouts/HomeLayout';
import CTitle       from '../../../shared/CTitle';
import CardLayout   from '../../../shared/CardLayout';
import ItemM1       from '../../../shared/ItemM1';
import UserBasicInformation from '../../../shared/UserBasicInformation';
import { getUserInformation } from '../../../utils/api/getUserInformation';


const DoctorProfile = () => {
  const doctor = getUserInformation({ userid: 1 });

  return (
    <>
      <Container maxWidth="md">
        <CTitle text='Perfil del médico' />
        <Grid container spacing={3} style={{ paddingBottom: 24 }}>
          <Grid item xs={12} sm={6}>
            <UserBasicInformation user={doctor} />
            <CardLayout title='Redes Sociales'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { 
                    doctor.social.map( item => (
                      <ItemM1 
                        key={item.id}
                        icon={item.icon} 
                        name={item.name}
                        link={item.link}
                      />
                    ))
                  }
                </ul>
              </CardContent>
            </CardLayout>
            <CardLayout title='Información de contacto'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { 
                    doctor.contact.map( item => (
                      <ItemM1 
                        key={item.id}
                        icon={item.icon} 
                        name={item.name}
                        text={item.text}
                      />
                    ))
                  }
                </ul>
              </CardContent>
            </CardLayout>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardLayout title='Experiencia'></CardLayout>
            <CardLayout title='Educación'></CardLayout>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default DoctorProfile;
