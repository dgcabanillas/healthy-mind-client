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
    marginLeft: theme.spacing(3),
      padding: '30px',
      borderRadius: '50%',
  })); 
  
const StyledContentCardBody = styled(Typography)(({ theme }) => ({ 
      marginLeft: theme.spacing(3),
  })); 

const StyledContentCardTittle = styled(Typography)(({ theme }) => ({ 
    marginLeft: theme.spacing(5),
})); 

const StyledCard = styled(Card)(({ theme }) => ({ 
  marginTop: theme.spacing(2),
  // marginLeft: theme.spacing(15),
  padding: '20px',
})); 

const RecipeReviewBottomCard = ({image, tittle, text}) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar image = {image} />
        }
      />
      <StyledContentCardTittle>
        {tittle}
      </StyledContentCardTittle>
      <CardContent>
        <StyledContentCardBody variant="body2" color="text.secondary">
          {text}
        </StyledContentCardBody>
      </CardContent>      
    </StyledCard>
  );
}

export default RecipeReviewBottomCard;