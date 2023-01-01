import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';


import heroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      position='relative'
      p='20px'
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }} 
    >
      <Typography 
        color="#ff2625"
        fontSize='26px'
        fontWeight='600'
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        my='1.5rem'
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography 
        fontSize='22px'
        lineHeight='35px'
        mb={4}
      >
        cheak out the most effective exercises
      </Typography>
      <Button
        variant="contained" 
        color='error'
        href='#exercises' 
        sx={{
          backgroundColor: '#ff2625',
          p: '.75rem'
        }} 
      >
        Expoler Exercises
      </Button>
      <Typography
        fontSize='300px'
        fontWeight={600}
        color='#ff2625'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
      >
        Exercises
      </Typography>
      <img className='hero-banner-img' src={heroBannerImage} alt='banner' />
    </Box>
  )
}

export default HeroBanner