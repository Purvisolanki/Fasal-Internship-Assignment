import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieToPlaylist } from '../redux/PlaylistSlice';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const MovieCard = ({ item }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddToPlaylist = () => {
        if (selectedPlaylist) {
            dispatch(addMovieToPlaylist({ movie: item, playlist: selectedPlaylist }));
            handleClose();
        } else {
            toast.error('Please select a playlist');
        }
    };

    const playlistOptions = [
        { name: 'actionMovies', label: 'Action Movies' },
        { name: 'comedyMovies', label: 'Comedy Movies' },
        { name: 'dramaMovies', label: 'Drama Movies' },
        { name: 'horrorMovies', label: 'Horror Movies' },
        { name: 'romanceMovies', label: 'Romance Movies' },
        { name: 'scienceFictionMovies', label: 'Science Fiction Movies' },
        { name: 'animationMovies', label: 'Animation Movies' },
        { name: 'documentaryMovies', label: 'Documentary Movies' },
    ];

    const Navigate = useNavigate()
    return (
        <>
            <Grid item className="xl:w-1/4 md:w-1/2 sm:w-full w-full p-4">
                <Grid item className="bg-gray-100 p-6 rounded-lg h-full" container direction='column' justifyContent='space-between'>
                    <Grid item>
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={item?.Poster} alt="content" />
                        <Typography variant='h6' className="tracking-widest text-red-500 text-xs font-medium title-font">{item?.Title}</Typography>
                        <Typography variant='h5' className="text-lg text-gray-900 font-medium title-font mb-4">{item?.Year}</Typography>
                    </Grid>
                    <Grid item container gap={1}>
                    <Button variant='contained'
    sx={{
        background: 'red',
        '&:hover': {
            color: 'black',
            background: 'red', // Maintain the same background color on hover
        },
    }}
    onClick={() => Navigate(`/movie-details/${item.imdbID}`)}
>
    View Details
                    </Button>

<Button variant='contained'
    sx={{
        background: 'red',
        '&:hover': {
            color: 'black',
            background: 'red', 
        },
    }}
    onClick={handleClickOpen}
>
    Add to Playlist
</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select Playlist</DialogTitle>
                <DialogContent>
                    <TextField
                        name='selectplaylist'
                        variant='outlined'
                        select
                        type='text'
                        defaultValue={1}
                        onChange={(e) => setSelectedPlaylist(e.target.value)}
                        fullWidth
                        SelectProps={{
                            sx: {
                                '& .MuiSelect-select': {
                                    paddingTop: '14px'
                                }
                            }
                        }}
                    >
                        <MenuItem value={1} disabled>Select Playlist</MenuItem>
                        {playlistOptions.map((playlist) => (
                            <MenuItem key={playlist.name} value={playlist.name}>{playlist.label}</MenuItem>
                        ))}
                    </TextField>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddToPlaylist}>Add to Playlist</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default MovieCard;