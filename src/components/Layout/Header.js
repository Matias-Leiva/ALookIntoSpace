import React from 'react';
import { Box } from '@mui/material';

function Header() {
  return (
    <Box className='header'>
      <img src={require('../../assets/img/logo.png')} className="header_logo" onClick={() => {window.location.href = '/'}}/>
    </Box>
  );
}

export default Header;
