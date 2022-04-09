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
            minWidth: 275,//card
            maxWidth: 400,
            height: 625
        },
    }),
);

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles(); //for card


    const handleDetailView = () => {
        console.log('clicked into HandleDetailView');
        dispatch({ type: 'FETCH_DETAIL', payload: movie.id })
        history.push('/details');
    }

    return (
        
        <>
            <Grid item xs={3}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography>
                        <p key={movie.id} >
                        <h2>{movie.title}</h2></p>

                        </Typography>

                    </CardContent>


                    <CardActions style={{ justifyContent: 'center' }}>

                    
                        <img onClick={handleDetailView}
                            src={movie.poster} alt={movie.title} />
                    
                </CardActions>
            </Card>
        </Grid>
       </>
    )
}



export default MovieItem;