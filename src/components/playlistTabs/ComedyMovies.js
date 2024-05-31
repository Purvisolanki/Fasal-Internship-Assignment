import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@mui/material';
import PlayListCard from './PlayListCard';
import InfoIcon from '@mui/icons-material/Info';

function ComedyMovies() {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    return (
        <>
            {
                Object.keys(moviePlaylist?.comedyMovies || {}).length <= 0 ?
                    (<Grid item container xs={12} spacing={2} justifyContent={'center'} marginTop={3}>
                        <Grid item>
                            <InfoIcon sx={{ color: 'red', fontSize: 40 }} />
                        </Grid>
                        <Grid item>
                            <Typography fontSize={18} fontWeight={600} sx={{ color: 'red' }}>No Movies added in Playlist</Typography>
                        </Grid>
                    </Grid>) : (<PlayListCard moviePlaylist={moviePlaylist?.comedyMovies} playlistName="comedyMovies"/>)
            }
        </>
    );
}

export default ComedyMovies;