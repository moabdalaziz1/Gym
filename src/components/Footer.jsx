import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='50px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' py='24px'>
        <img src={Logo} alt="logo" />
        <Typography variant='h5' textTransform='capitalize'>
          made by <a href='https://twitter.com/m_abdalaziz_' target='_blank' rel="noreferrer" style={{
            color: '#ff2625',
            fontWeight: 'bold',
          }}>ZIZU</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer