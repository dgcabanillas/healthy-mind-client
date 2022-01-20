import React from 'react';
import { Button, Card, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import HomeLayout from '../../components/layouts/HomeLayout';
import LandingCardsTop from '../../components/LandingCardsTop';
import LandingCardsBottom from '../../components/LandingCardsBottom';

const Home = () => {
  return (
    <HomeLayout>
      <Container>
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className='d-flex flex-column justify-content-center p-4' style={{height: '100%'}}>
              <Typography component="h1" variant="h3" color="primary" style={{fontWeight: '500'}}>
                Healthy Mind
              </Typography>
              <Typography component="p" variant="h6" color="text.secondary">
                Tenemos los mejores especialistas esperando por brindarte la ayuda que necesitas para disfrutar de una vida plena.
              </Typography>
              <div className='mt-5'>
                <Button variant='outlined'> ver doctores </Button>
                <Button variant='contained' className='ms-3'> ingresar </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0}>
              <CardMedia 
                component="img"
                image="images/psicologia.png"
                alt="Psicologia"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div style={{ background: '#bbbce9' }} className='py-4'>
        <LandingCardsTop />
        <LandingCardsBottom />
      </div>
    </HomeLayout>
  )
}

export default Home;
