import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Box className='boxHome'>
      <Button onClick={()=> <Link />} />
    </Box>
  );
}

export default Home;
