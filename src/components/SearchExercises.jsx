import React, {useState, useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { HorizontalScrollbar } from '../components/index';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      
      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='2.5rem'
      p='1.25rem'
    >
      <Typography
        fontWeight={700}
        textAlign='center'
        mb='3rem'
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box
        position='relative'
        mb='4.5rem'
      >
        <TextField
          height='76px'
          value={search}
          onChange={ (e) => setSearch(e.target.value.toLowerCase()) }
          placeholder='Search Exercises'
          type='text'
          color="error"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
        />
        <Button 
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color:'#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',         
          }}
          onClick={handleSearch}
        >
          Search  
        </Button>
      </Box>
      <Box
        position='relative'
        width='100%'
        p='20px'
      >
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises