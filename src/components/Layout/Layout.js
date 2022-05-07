import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <Box className="box_container">
      <Header />
      <Container fixed>{children}</Container>
      <Footer />
    </Box>
  );
}

export default Layout;
