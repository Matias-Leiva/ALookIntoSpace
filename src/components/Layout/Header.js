import React from 'react';
import { Box } from '@mui/material';
import logo from '../../assets/img/logo.png';

function Header() {
  return (
    <Box className="header">
      <img
        src={logo}
        className="header_logo"
        onClick={() => {
          window.location.href = '/';
        }}
        alt="A look into space"
      />
    </Box>
  );
}

export default Header;
