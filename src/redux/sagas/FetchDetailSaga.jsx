
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// get details of ONE movie from the database AND its genre info
function* fetchDetail(action) {
    // console.log(action.payload);
    const id = action.payload;
    try {
        const oneMovie = yield axios.get(`/api/movie/${id}`)
        const genres = yield axios.get(`/api/genre/${id}`)
        yield put({ type: 'SET_DETAIL', payload: oneMovie }); //gets back 200 status
        yield put({ type: 'SET_GENRES', payload: genres }); //gets back 200 status

    } catch {
        console.log('viewDetail error');
    }

}

export default fetchDetail;