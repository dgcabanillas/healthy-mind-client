import { Avatar, Grid, Paper } from '@mui/material';
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';


const Login = () => {

  const paperStyle={padding: 10,height:'70vh', width:280,margin:"90px auto "}
  const avatarStyle={backgroundColor:'purple'}
  const btnStyle={backgroundColor:'purple'}
  //const subPaperStyle={padding: 10,height:'40vh', width:400,margin:"0px auto "}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h1>sign in</h1>
        </Grid>
        <TextField label="Username" placeholder='Ingrese el usuario' id="standard-basic"  variant="standard" fullWidth required></TextField>
        <TextField label="Password" placeholder='Ingrese la contraseña' id="standard-basic"  variant="standard" type='password' fullWidth required></TextField> 

        <FormControlLabel

          control={
            <Checkbox
             name="checked8"
             color="primary"
            /> 
          }
          label="Recordar"
        />
        <Button type='submit' variant='contained' style={btnStyle} color='primary' fullWidth>Ingresar</Button>
        <Typography> 
          <Link href="#">
            ¿Te olvidaste tu contraseña?
          </Link>
        </Typography>
        <Typography> ¿Tu tienes una cuenta?
          <Link href="#">
              Ingresar
          </Link>
        </Typography>
      </Paper>

    </Grid> 
  )
}

export default Login;
