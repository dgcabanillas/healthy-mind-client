import React from 'react'
import Container    from '@mui/material/Container';
import Grid         from '@mui/material/Grid';
import CardContent  from '@mui/material/CardContent';
import Button       from '@mui/material/Button';
import Card         from '@mui/material/Card';
import HomeLayout   from '../../../components/layouts/HomeLayout';
import CTitle       from '../../../shared/CTitle';
import CardLayout   from '../../../shared/CardLayout';
import ItemM1       from '../../../shared/ItemM1';
import UserBasicInformation from '../../../shared/UserBasicInformation';
import { getUserInformation } from '../../../utils/api/getUserInformation';
import CareerItem from '../../../shared/CareerItem';
import { Link } from 'react-router-dom'; 


const DoctorProfile = () => {
  const doctor = getUserInformation({ userid: 1 });

  return (
    <HomeLayout>
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
            <CardLayout title='Experiencia'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { doctor.experience.map( item => <CareerItem key={item.id} data={item}/> )}
                </ul>
              </CardContent>
            </CardLayout>
            <CardLayout title='Educación'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { doctor.education.map( item => <CareerItem key={item.id} data={item}/> )}
                </ul>
              </CardContent>
            </CardLayout>
            <Card elevation={0}>
              <CardContent style={{ paddingTop: 0 }}>
                <Link to='/patientList'>
                  <Button size='small' variant="contained" color="primary" > 
                    Ver lista pacientes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </HomeLayout>
  )
}

export default DoctorProfile;
