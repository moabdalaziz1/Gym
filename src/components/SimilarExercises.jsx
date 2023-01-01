import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { HorizontalScrollbar, Loader } from './index';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg : '100px', xs: '0'} }}>
      <Typography variant='h3' mb={3}>
        Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>target muscle</span> exercises
      </Typography>
      <Stack 
        direction='row'
        mb={5}
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          targetMuscleExercises.length ? 
            <HorizontalScrollbar data={targetMuscleExercises} /> :
            <Loader />
        }
      </Stack>
      <Typography variant='h3' mb={3}>
        Similar <span style={{color: '#ff2625', textTransform: 'capitalize'}}>equipment</span> exercises
      </Typography>
      <Stack 
        direction='row'
        mb={5}
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          equipmentExercises.length ? 
            <HorizontalScrollbar data={equipmentExercises} /> :
            <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises