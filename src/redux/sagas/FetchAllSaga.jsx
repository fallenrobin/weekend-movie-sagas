import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllMovies() {
    // gets ALL movies from the DB on home page load
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });//send them to reducer

    } catch {
        console.log('get all error');
    }

}


export default fetchAllMovies;