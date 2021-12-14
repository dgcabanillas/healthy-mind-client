import React from 'react'
import Icofont    from '../Icofont'
import Link       from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  itemM1: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    '& .Icofont': {
      marginRight: 12
    },
    '& .itemM1__text': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& .MuiTypography-root': {
      fontSize: 12,
      lineHeight: '15px'
    },
    '& .MuiLink-root': {
      textDecoration: 'none'
    }
  }
}));

const CustomLink = ({ link }) => {
  const { text, href } = link;
  return ( <Link variant="caption" href={href}>{ text }</Link> )
}

const CustomText = ({ text }) => {
  return ( <Typography variant="caption">{ text }</Typography> )
}

const ItemM1 = ({ icon, name, link, text }) => {
  const classes = useStyles();

  return (
    <li className={classes.itemM1}>
      <Icofont icon={icon}/>
      <div className='itemM1__text'>
        <Typography variant="caption" display='block'>{ name }</Typography>
        { link && <CustomLink link={link}/> }
        { text && <CustomText text={text}/> }
      </div>
    </li>
  )
}

export default ItemM1
