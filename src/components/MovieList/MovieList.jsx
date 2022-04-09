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
            <h2 className="header" >Now Available for You to Click</h2>
            <section className="movies">
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="flex-start"
                    justify="flex-start"
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