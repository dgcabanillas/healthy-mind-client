
import React from 'react'
import AuthLayout from '../../../components/layouts/AuthLayout';
import { Container, Grid } from '@mui/material';

const Login = () => {
  return (
    <AuthLayout>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <div style={{ background: 'blue', height: 200 }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <div style={{ background: 'yellow', height: 200 }} />
          </Grid>
        </Grid>
      </Container>
    </AuthLayout>
  )
}

export default Login;
