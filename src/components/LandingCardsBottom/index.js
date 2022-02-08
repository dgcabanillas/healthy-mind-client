import { Container, Grid } from '@mui/material';
import * as React from 'react';
import styled from '@emotion/styled';
import RecipeReviewBottomCard from '../bottomCard';
import SectionTitle from '../../shared/SectionTitle';

const Info = [
    {image : 'http://medic-app-react.next-item.com//content/user-40-3.jpg', tittle: 'Compromiso', text: 'Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.' },
    {image : 'http://medic-app-react.next-item.com//content/user-40-4.jpg', tittle: 'Responsabilidad', text : 'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.'},
    {image : 'http://medic-app-react.next-item.com//content/user-40-5.jpg', tittle: 'Actitud', text : 'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.'},
    {image : 'http://medic-app-react.next-item.com//content/user-40-6.jpg', tittle: 'Estabilidad', text : 'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.'},
    {image : 'http://medic-app-react.next-item.com//content/user-40-7.jpg', tittle: 'Accesible', text : 'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.'},
    {image : 'http://medic-app-react.next-item.com//content/user-40-8.jpg', tittle: 'Puntualidad', text : 'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.'},
];

const StyledContainer = styled(Container)(() => ({ 
    minWidth: 800,
    maxWidth: 1100,
})); 

function PagePresentationCardsBottom(){
    return(
        <StyledContainer>
            <SectionTitle text='Nuestros valores' />
            <Grid container spacing={3}>
            {Info.map(Infos => (
                <Grid item xs={12} sm={4}>
                    <RecipeReviewBottomCard image = {Infos.image} tittle={Infos.tittle} text = {Infos.text} />       
                </Grid>    
            ))};
            </Grid>
        </StyledContainer>  
    )
}

export default PagePresentationCardsBottom;