import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = [
  { id:1,title: 'Home', url: '/home' },
  { id:2,title: 'Doctores', url: '/user/doctor-list' },
  { id:3,title: 'Nosotros', url: '/about' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ 'background': 'white' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="" alt="" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}

            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography variant='caption' textAlign="center">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Toolbar>
            <Box component="img"
              sx={{
                height: 54,
              }}
              alt="Your logo."
              src={'/images/peace-of-mind.jpg'}
            />
          </Toolbar>
          {/* menu principal */}
          <Box style={{ 'justifyContent': 'right','marginRight':'10px'}} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link style={{'textDecoration':'none','marginRight':'10px'}} to={page.url} > {page.title}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button size='small' variant='contained'>Iniciar Sesion</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;