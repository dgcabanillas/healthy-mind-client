import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 17,
    padding: 15,
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 15,
    backgroundColor : '#F8F8F8',
    
  },
})); 

export const StyledTableCellGray = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: 15,
      color: '#ADA5A5',
      backgroundColor : '#F8F8F8',
      
    },
})); 

export const StyledTableCellGreen = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      align: 'center',
      backgroundColor: '#4caf50',
      fontSize: 14,
      color: theme.palette.common.white,
      borderRadius: 16,
      
      
    },
})); 

export const StyledTableCellName = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontWeight: 800,
      fontSize: 14,
      padding: 15,
      backgroundColor : '#F8F8F8',
    },
})); 

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const StyledButtonProfile = styled(IconButton)(({ theme }) => ({
    backgroundColor: "#171819",
    width: "40px",
    height: "40px",
    marginRight: "3px",
}

));

export const StyledButtonEdit = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "40px",
    height: "40px",
    marginRight: "3px",
}
)); 

export const StyledButtonDelete = styled(IconButton)(({ theme }) => ({ 
    backgroundColor: theme.palette.error.dark, 
    width: "40px",
    height: "40px",
    marginRight: "3px",
  }
)); 

