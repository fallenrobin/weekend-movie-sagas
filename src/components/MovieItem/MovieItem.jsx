import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//MUI for card
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//grid for centering
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            maxWidth: 375,
            // height: 400
            minHeight: 200,
            maxHeight: 400
        },
    }),
);

function MovieItem({ movie}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles(); //for card



    const handleDetailView = () => {
        console.log('clicked into HandleDetailView');
        dispatch({ type: 'FETCH_DETAIL', payload: movie.id })//will trigger fetchDetail saga
        history.push(`/details/${movie.id}`);//'moves' user to page view with movie details
    }

    return (
        //each card created as the .map loops thru array of movies in MovieList
        <>
            <Grid
                item md={2}
            >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        {/* <Typography>
                        <p key={movie.id} >
                        <h2>{movie.title}</h2></p>

                        </Typography> (looks better without the title)*/}
                        <img className="listImg" key={movie.id} onClick={handleDetailView}
                            src={movie.poster} alt={movie.title} />
                    </CardContent>
                    {/* card doesn't benefit from CardAction section */}
                </Card>
            </Grid>
        </>
    )
}



export default MovieItem;