import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//MUI for card
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
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
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
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            // justify="center" //better without; this puts in very center of page
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={6}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Thanks for your feedback!
                        </Typography>

                    </CardContent>


                    <>
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>

                            <img onClick={handleDetailView}
                                src={movie.poster} alt={movie.title} />
                        </div>
                    </>
                </Card>
            </Grid>
        </Grid >
    )
}



export default MovieItem;