import React from 'react';
import { Card, Grid, CardMedia, CardContent, Typography, Box, CardActions, IconButton, Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Link } from 'react-router-dom';

export const DoctorCard = ({ doctor }) => {

    const { name, images, shorDescription, socialNetworks, profession } = doctor;

    const selectSocialNetwork = function (nameSocial) {
        switch (nameSocial) {
            case 'facebook':
                return <FacebookIcon />

            case 'twitter':
                return <TwitterIcon />

            default:
                return <InstagramIcon />
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card elevation={12} sx={{ maxWidth: 345, margin: '23px' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={images[0]}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '600' }} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="body2" color="text.secondary">
                        {profession}
                    </Typography>
                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                        {
                            socialNetworks.map((element, i) =>
                                <IconButton key={i} aria-label="add to favorites">
                                    {
                                        selectSocialNetwork(element.nameSocial)
                                    }
                                </IconButton>
                            )
                        }
                    </CardActions>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', marginLeft: '5px', marginRight: '5px', textAlign: 'center' }} variant="subtitle2" color="text.secondary">
                        {shorDescription}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} >
                    <Link to='/user/doctor-profile'>
                        <Button size='small' variant="contained" color="primary" > 
                            Ver Perfil
                        </Button>
                    </Link>
                </Box>
            </Card>
        </Grid>

    )
}

export default DoctorCard;