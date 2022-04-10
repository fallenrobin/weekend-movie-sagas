import { HashRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import GenreItem from '../App/GenreItem/GenreItem';

//MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';
import { ClassNames } from '@emotion/react';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 100,
            height: 200,
        },
    }),
);

function MovieDetail() {

    const movie = (useSelector(store => store.singleMovie))
    const genres = (useSelector(store => store.genres))
    const history = useHistory();
    const {id} = useParams(); 
    const dispatch = useDispatch();

    useEffect(() => {//triggers saga getting all movies from DB on page load
        dispatch({ 
            type: 'FETCH_DETAIL', 
            payload: id
        });
    }, []);

    console.log('in details page', movie);


    return (

        <>
            <Grid
                align="center"
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={4}>
                    <Card className={ClassNames.root} variant="outlined">
                        <CardContent>

                            <div key={id} >
                                <Typography variant="h4">
                                    <h3>{movie.title}</h3>
                                </Typography >
                                <img className="detailImg" src={movie.poster} alt={movie.title} />

                                <Typography variant="h5">
                                    <p className="descriptionText">{movie.description}</p>
                                </Typography>
                                <p>Genres: </p>
                                {genres.map((genre) => {//maps thru array of genres in reducer
                                    return (
                                        <GenreItem
                                            genre={genre}
                                        />);
                                })}

                            </div>
                            <Button style={{ width: '15%' }} variant="outlined" color="primary"
                                onClick={() => { history.push('/') }}>Return to list</Button>
                            {/* button returns user to movie list; subtle so as not to detract visually from movie*/}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>

    )
}


export default MovieDetail;