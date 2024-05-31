import { Grid, Typography } from '@mui/material';
import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import InfoIcon from '@mui/icons-material/Info';
const MovieContainer = () => {
  const { movie } = useSelector((state) => state.user);

  return (
    <>
      <Grid container width="80%" className="slider-container">
        {movie?.length > 0 ? (
          movie.map((item,index) => <MovieCard key={index} item={item} />)
        ) : (
            <Grid item container xs={12} spacing={2}  justifyContent={'center'} marginTop={3}>
            <Grid item>
                <InfoIcon sx={{ color: 'red', fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Typography fontSize={18} fontWeight={600} sx={{ color: 'red' }}>Please search valid movie</Typography>
            </Grid>
        </Grid>
        )}
      </Grid>
    </>
  );
};

export default MovieContainer;