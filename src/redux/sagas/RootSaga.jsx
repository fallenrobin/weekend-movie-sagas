import { takeEvery } from 'redux-saga/effects';
import fetchAllMovies from './FetchAllSaga';
import fetchDetail from './FetchDetailSaga';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAIL', fetchDetail);
}

export default rootSaga;