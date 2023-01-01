import React from 'react';

import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems= 'center'
      sx={{
        gap: { sm: '9rem', xs: '3rem' },
        mt: { sm: '2rem', xs: '1.5rem'},
        px: '1.25rem'
      }}
    >
    <Link to="/">
      <img 
        src={Logo} 
        alt='logo' 
        style={{
          width: '48px',
          height: '48px',
          margin: '0 20px'
        }}
      />
    </Link>
    <Stack
      direction='row'
      gap='2.5rem'
      fontSize='24px'
      alignItems='flex-end'
    >
      <Link 
        to='/' 
        style={{
          textDecoration: 'none',
          color: '#3a1212',
          borderBottom: '3px solid #ff2625'
        }}
      >Home</Link>
      <a 
        href='#exercises' 
        style={{
          textDecoration: 'none',
          color: '#3a1212'
        }}
      >Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar