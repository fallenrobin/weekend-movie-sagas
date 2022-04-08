import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleDetailView = () => {
        console.log('clicked into HandleDetailView');
        history.push('/details');
    }

    return (
        <>
            <div key={movie.id} >
                <h3>{movie.title}</h3>

                <img
                    onClick={handleDetailView}
                    src={movie.poster} alt={movie.title} />
            </div>
        </>
    )
}



export default MovieItem;