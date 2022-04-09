import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

import Grid from '@material-ui/core/Grid';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
            <Grid
            container
            spacing={2}
            direction="row"
            alignItems="flex-start"
            justify="space-between" 
            style={{ minHeight: '100vh' }}>
                {movies.map((movie, i) => {
                    return (
                        <MovieItem
                            id={i}
                            movie={movie}
                        />);
                })}

            </Grid>
            </section>
        </main>

    );
}

export default MovieList;