import { put } from 'redux-saga/effects';
import axios from 'axios';


// gets details of ONE movie from the DB:
// data from the movies, genres, and movies_genres tables 
function* fetchDetail(action) {
    // console.log(action.payload);
    const id = action.payload;
    try {
        const oneMovie = yield axios.get(`/api/movie/${id}`)//gets one movie's details from "movies" table
        const genres = yield axios.get(`/api/genre/${id}`)//gets one movie's genres from junction/genres tables
        yield put({ type: 'SET_DETAIL', payload: oneMovie });//sends DB data to reducer (via IndexSaga)
        yield put({ type: 'SET_GENRES', payload: genres });//sends DB data to reducer (via IndexSaga)

    } catch {
        console.log('viewDetail error');
    }

}

export default fetchDetail;