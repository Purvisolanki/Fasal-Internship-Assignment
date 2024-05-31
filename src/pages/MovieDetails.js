import React, { useEffect } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import {Card, CardContent, CardMedia, Grid, Typography,Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { handleMovieDeatails } from '../redux/userSlice'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
const MovieDetails = () => {
    const { movieDetails } = useSelector((state) => state.user)
    const { id } = useParams();
    const dispatch = useDispatch();
    const key = "2d4765cd";
    const API = `https://www.omdbapi.com/?apikey=${key}&i=${id}` 

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(API, {
                // mode: "no-cors",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            })
            const data = await response.json();
            dispatch(handleMovieDeatails(data))                             
        } catch (error) {
            console.log('Error in search api', error);
        }
    }
    
    useEffect(() => {
        fetchMovieDetails();
    }, []) 

    return (
        <>
            <PrimarySearchAppBar />
            
            <div className="relative h-screen w-full flex justify-center ">
                <img src="assets/hero-img.jpg" alt="details" className="h-screen w-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
                
                <Grid item container justifyContent='center' alignItems='center' className='absolute z-20 '>
                    <Grid container item >
                    <Button
      component={Link}
      to = '/home'
      sx={{
        marginLeft : "5.5%",
        height: '100%',
        marginTop: 4,
        backgroundColor: '#E50914',
        color: '#fff',
        padding: 1.5,
        '&:hover': {
          backgroundColor: 'black',
        },
      }}
    >
      Back
    </Button>

                    </Grid>
               
                    <Grid item container justifyContent='center' alignItems='center' direction='column' xs={10} lg={12}>
                        <Typography variant='h3' sx={{ color: '#fff' }}>
                            Unlimited movies, TV shows and more
                        </Typography>
                        <Grid item container justifyContent='center' alignItems='center' padding={3}>
                            <Grid item xs={10} sm={8} lg={6}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={12} md={4}>
                                        <CardMedia
                                                component="img"
                                                height="100%"
                                                image={movieDetails?.Poster}
                                                alt={movieDetails?.Title}
                                                sx={{height: '100%'}}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {movieDetails?.Title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <strong>Year:</strong> {movieDetails?.Year}<br />
                                                    <strong>Rated:</strong> {movieDetails?.Rated}<br />
                                                    <strong>Released:</strong> {movieDetails?.Released}<br />
                                                    <strong>Runtime:</strong> {movieDetails?.Runtime}<br />
                                                    <strong>Genre:</strong> {movieDetails?.Genre}<br />
                                                    <strong>Director:</strong> {movieDetails?.Director}<br />
                                                    <strong>Writer:</strong> {movieDetails?.Writer}<br />
                                                    <strong>Actors:</strong> {movieDetails?.Actors}<br />
                                                    <strong>Plot:</strong> {movieDetails?.Plot}<br />
                                                    <strong>Language:</strong> {movieDetails?.Language}<br />
                                                    <strong>Country:</strong> {movieDetails?.Country}<br />
                                                    <strong>Awards:</strong> {movieDetails?.Awards}
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default MovieDetails