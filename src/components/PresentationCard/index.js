import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import styled from '@emotion/styled';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const StyledAvatar = styled(CardMedia)(({ theme }) => ({ 
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(-5),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(15),
      padding: '30px',
      borderRadius: '50%',
  })); 
  
const StyledContentCard = styled(Typography)(({ theme }) => ({ 
      textAlign: 'center',
  })); 

const StyledCard = styled(Card)(({ theme }) => ({ 
    marginTop: theme.spacing(2),
    padding: '20px',

})); 

const RecipeReviewCard = ({image, text}) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar image = {image} />
        }
      />
      <CardContent>
        <StyledContentCard variant="body2" color="text.secondary">
          {text}
        </StyledContentCard>
      </CardContent>      
      
    </StyledCard>
  );
}
export default RecipeReviewCard;