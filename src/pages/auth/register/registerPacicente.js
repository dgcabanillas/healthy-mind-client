import React from 'react'
import AuthLayout from '../../../components/layouts/AuthLayout';

import { Avatar, Grid, Paper, Container } from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';



const Register = () => {
  const paperStyle = { padding: 10, height: '70vh', width: 280, margin: "90px auto " }
  const avatarStyle = { backgroundColor: 'purple' }
  const btnStyle = { backgroundColor: 'purple' }
  const loginStyle = {
    background: 'white',
    height: 500,

  }
  const loginRigthStyle = { background: 'gray', height: 500 }
  return (
    <AuthLayout>
      <Grid item xs={24} justify="center" style={{ padding: 125 }}>
        <Container maxWidth="md"   >
          <Grid container spacing={0} >
            <Grid item xs={12} md={5}>
              <div style={loginRigthStyle}></div>
            </Grid>
            <Grid item xs={12} md={5} align="center">
              <div style={loginStyle}>
                <Avatar></Avatar>
                <h1>Create Account</h1>
                <Grid style={{ padding: 10 }}>
                  <TextField label="Username" placeholder='Ingrese el usuario' id="outlined-required" fullWidth required></TextField>
                  <br /><br />
                  <TextField label="Password" placeholder='Ingrese la contraseña' id="outlined-password-input" v type='password' fullWidth required></TextField>
                  <br/><br/>
                  <TextField label="Password" placeholder='Ingrese la contraseña' id="outlined-password-input" v type='password' fullWidth required></TextField>
                  <br/><br/>
                  <Button type='submit' variant='contained' style={btnStyle} color='primary' fullWidth>Registrar</Button><br /><br />
                  <Typography >
           
                  </Typography><br />
                  <Typography> ¿Tu tienes una cuenta?
                    <Link href="#" align="right">
                      Ingresar
                    </Link>
                  </Typography>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </AuthLayout>
  )
}

export default Register;