import React from 'react';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import Spline from '@splinetool/react-spline';

function Home() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: '#0f0c29',
    backgroundColor: '#E47B40',
    '&:hover': {
      backgroundColor: '#E47B40',
    },
  }));

  return (
    <Box className="box_home">
      <div className="space_mars">
        <Spline
          scene="https://prod.spline.design/3664aZhGHoIx0tYD/scene.splinecode"
          className="spline_mars"
        />
      </div>
      <ColorButton
        className="rovers_redirect"
        variant="outlined"
        onClick={() => {
          window.location.href = '/rovers';
        }}
        size="large"
      >
        See Rovers Photos!
      </ColorButton>
    </Box>
  );
}

export default Home;
