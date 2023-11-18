import React from 'react';
<<<<<<< HEAD
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/TopNav.scss';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" >
        <Toolbar className='TopNav-bar'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Cat Yoga
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
=======
import './styles/TopNavBar.scss';

const TopNav = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">CatYoga</span>
      <nav className="top-nav-bar__nav">
        <div className="nav-item">About</div>
        <div className="nav-item">FAQ</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">December2023</div>
      </nav>
    </div>
  );
};
>>>>>>> master

export default TopNav;