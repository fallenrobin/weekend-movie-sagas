import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GenreItem from '../App/GenreItem/GenreItem';

function MovieDetail() {

    const singleMovie = (useSelector(store => store.singleMovie))
    const genres = (useSelector(store => store.genres))
    const history = useHistory();
    console.log('in details page', singleMovie);

    return (

        <>
            <h1>Movie details</h1>
            <button onClick={() => { history.push('/') }}>Return to list</button>

            <div key={singleMovie.id} >
                <h3>{singleMovie.title}</h3>

                <img src={singleMovie.poster} alt={singleMovie.title} />
                <p>{singleMovie.description}</p>
                <p>Genres: </p>
                {genres.map((genre, i) => {
                    return (
                        <GenreItem
                            id={i}
                            genre={genre}
                        />);
                })}
                
            </div>
        </>

    )
}


export default MovieDetail;