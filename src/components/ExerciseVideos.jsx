import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      p='20px'
      sx={{
        mt: { lg: '200px', xs: '20px'}
      }}
    >
      <Typography 
        variant='h3' 
        mb='33px'
        sx={{
          fontSize: { lg: '45px', xs: '24px' }
        }}
      >
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent='center'
        alignItems='center'
        flexWrap='wrap'
        sx={{
          flexDirection: { md: 'row' },
          gap: '50px',
        }}
      >
        {
          exerciseVideos?.slice(0, 6).map((item, index) => (
            <a 
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography 
                  variant='h6' 
                  color='#000' 
                  fontWeight='bold'
                  sx={{
                    fontSize: { lg: '20px', xs: '18px' }
                  }}
                >
                  {item.video.title}
                </Typography>
                <Typography variant='p' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos