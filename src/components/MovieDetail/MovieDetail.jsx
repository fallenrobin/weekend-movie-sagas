import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

    const singleMovie = (useSelector(store => store.singleMovie))
    const genres = (useSelector(store => store.genres))
    const history = useHistory();

    console.log('in details page', singleMovie);


    return (

        <>
            <Grid
                align="center"
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={8}>
                    <Card className={ClassNames.root} variant="outlined">
                        <CardContent>

                            <div key={singleMovie.id} >
                                <Typography variant="h4">
                                    <h3>{singleMovie.title}</h3>
                                </Typography >
                                <img className="detailImg" src={singleMovie.poster} alt={singleMovie.title} />

                                <Typography variant="h5">
                                    <p className="descriptionText">{singleMovie.description}</p>
                                </Typography>
                                <p>Genres: </p>
                                {genres.map((genre, i) => {//maps thru array of genres in reducer
                                    return (
                                        <GenreItem
                                            id={i}
                                            genre={genre}
                                        />);
                                })}

                            </div>
                            <Button style={{width:'15%'}} variant="outlined" color="primary" 
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