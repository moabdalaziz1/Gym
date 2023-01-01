import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';

import './App.css';
import { Home, ExerciseDetail } from './pages/index';
import { Navbar, Footer } from './components/index';


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Arial',
        'Helvetica',
        'sans-serif'
      ].join(','),
    },});
  return (
    <ThemeProvider theme={theme}>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
