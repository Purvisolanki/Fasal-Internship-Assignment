import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeMovieFromPlaylist } from '../../redux/PlaylistSlice'

const PlayListCard = ({ moviePlaylist, playlistName }) => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = (imdbID) => {
        dispatch(removeMovieFromPlaylist({ imdbID, playlistName }))
    }
    return (
        <>
            <Grid container width='100%' gap={5}>
                {moviePlaylist?.map((item, index) => (
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={item?.Poster}
                                alt={item?.Title}
                                sx={{ height: '375px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item?.Year}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item?.Title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
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
                                View 
                            </Button>
                            <Button variant='contained'
                                sx={{
                                    background: 'red',
                                    '&:hover': {
                                        color: 'black',
                                        background: 'red', // Maintain the same background color on hover
                                    },
                                }}
                                onClick={() => { handleDelete(item.imdbID) }}
                            >
                                Remove
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </>
    )
}

export default PlayListCard