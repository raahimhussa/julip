import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <img
          src="/Group 555.png" // Directly from the public folder
          alt="Julip Logo"
          style={{ height: '50px', marginRight: '16px' }}
        />
        {/* This Box will take up the remaining space to push the buttons to the right */}
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" style={{ color: 'black', textTransform: 'none', fontWeight: 'bold' }}>
          Pricing
        </Button>
        <Button color="inherit" style={{ color: 'black', textTransform: 'none' , fontWeight: 'bold'}}>
          Login
        </Button>
        <Button
          color="inherit"
          variant="contained"
          style={{
            backgroundColor: '#DCFFBA',
            borderRadius: '15px',
            color: '#3B5E54',
            textTransform: 'none',
             fontWeight: 'bold',
            marginLeft: '8px' // Add some space between the buttons
          }}
        >
          Start for Free
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
