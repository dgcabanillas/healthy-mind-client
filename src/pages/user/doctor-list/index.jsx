import React from 'react';
import { doctors } from '../../../utils/fakedb/doctors';
import DoctorCard from './components/DoctorCard';
import { Grid, Container, Button, FormControl } from '@mui/material'
import UnstyledInput from '../../../shared/Input';
import HomeLayout from '../../../components/layouts/HomeLayout';

const DoctorList = () => {
    return (
        <HomeLayout>
            <Container>
                <br /> 
                <Grid container>
                    <Grid item xs={10} md={10} >
                        <FormControl fullWidth >
                            <UnstyledInput />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} md={2} >
                        <FormControl fullWidth>
                            <Button variant='contained'> Buscar </Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container   spacing={3}>
                    {doctors.map((element, index) =>
                        <DoctorCard key={index} doctor={element} />
                    )}
                </Grid>
            </Container>
        </HomeLayout>
    )
}

export default DoctorList
