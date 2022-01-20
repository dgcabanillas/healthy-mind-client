import styled from '@emotion/styled';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const StyledAvatar = styled(CardMedia)(({ theme }) => ({ 
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(-5),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(15),
      padding: '30px',
      borderRadius: '50%',
  })); 
  
export const StyledContentCard = styled(Typography)(({ theme }) => ({ 
      textAlign: 'center',
  })); 