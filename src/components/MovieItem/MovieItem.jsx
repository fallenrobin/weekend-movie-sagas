import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetailView = () => {
        console.log('clicked into HandleDetailView');
        dispatch ({type: 'VIEW_DETAIL', payload: movie.id})
        // history.push('/details'); put in saga?
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