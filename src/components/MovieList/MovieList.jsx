import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

import Grid from '@material-ui/core/Grid';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {//triggers saga getting all movies from DB on page load
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h3 className="header" >Now Available for You to Click</h3>
            <section className="movies">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
                    style={{ minHeight: '100vh' }}>
                    {movies.map((movie) => {
                        return ( //loops thru array of movies to create each movie card
                            <MovieItem
                                movie={movie}
                            />);
                    })}

                </Grid>
            </section>
        </main>

    );
}

export default MovieList;