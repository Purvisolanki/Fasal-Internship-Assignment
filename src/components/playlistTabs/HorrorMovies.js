import React from 'react'
import { useSelector } from 'react-redux';
import PlayListCard from './PlayListCard';
import InfoIcon from '@mui/icons-material/Info';
import { Grid, Typography } from '@mui/material';

const HorrorMovies = () => {
    const { moviePlaylist } = useSelector((state) => state.moviePlaylist);
    return (
        <>
            {
                Object.keys(moviePlaylist?.horrorMovies || {}).length <= 0 ?
                    (<Grid item container xs={12} spacing={2} sx={{marginTop:"3px"}} justifyContent={'center'}>
                        <Grid item>
                            <InfoIcon sx={{ color: 'red', fontSize: 40 }} />
                        </Grid>
                        <Grid item>
                            <Typography fontSize={18} fontWeight={600} sx={{ color: 'red' }}>No Movies added in Playlist</Typography>
                        </Grid>
                    </Grid>) : (<PlayListCard moviePlaylist={moviePlaylist?.horrorMovies} playlistName="horrorMovies"/>)
            }
        </>
    );
}

export default HorrorMovies