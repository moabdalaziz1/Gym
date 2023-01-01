import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import bodyPartImg from '../assets/icons/body-part.png'
import targetImg from '../assets/icons/target.png'
import equipmentImg from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImg,
      name: bodyPart
    },
    {
      icon: targetImg,
      name: target
    },
    {
      icon: equipmentImg,
      name: equipment
    },
  ]

  return (
    <Stack
      gap='60px'
      p= '20px'
      alignItems='center'
      sx={{
        flexDirection: { lg: 'row' }
      }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg : '35px', xs: '20px' } }}
      >
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. {name} is one of the best exercises
          to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {
          extraDetail.map((item, index) => (
            <Stack key={index} direction='row' alignItems='center' gap='24px'>
              <Button
                sx={{
                  background: '#fff2db',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                }}
              >
                <img 
                  src={item.icon}
                  alt={bodyPart}
                  style={{
                    width: '50px',
                    height: '50px'
                  }}
                />
              </Button>
              <Typography variant='h6' textTransform='capitalize'>
                {item.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Detail