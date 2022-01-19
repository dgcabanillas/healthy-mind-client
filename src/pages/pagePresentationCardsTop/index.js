import { Container, Grid } from '@mui/material';
import * as React from 'react';
import RecipeReviewCard from '../../components/PresentationCard';
import styled from '@emotion/styled';

const Info = [
    {image : 'http://medic-app-react.next-item.com//content/user-40-3.jpg', text: 'Moderando los hábitos de las personas y conociendo sus costumbres se puede sanar' },
    {image : 'http://medic-app-react.next-item.com//content/user-40-4.jpg', text: 'Confiar en ti mismo no garantiza el éxito, pero no hacerlo garantiza el fracaso'},
    {image : 'http://medic-app-react.next-item.com//content/user-40-5.jpg', text: 'El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice'},
];

const StyledContainer = styled(Container)(({ theme }) => ({ 
    minWidth: 800,
    maxWidth: 1100,
    
})); 

function PagePresentationCardsTop(){
    return(
        <StyledContainer>
            <Grid container spacing={3}>
            {Info.map(Infos => (
                <Grid item xs={12} sm={4}>
                    <RecipeReviewCard image = {Infos.image} tittle={Infos.tittle} text = {Infos.text} />       
                </Grid>    
            ))};
            </Grid>
        </StyledContainer>  
    )
}

export default PagePresentationCardsTop;