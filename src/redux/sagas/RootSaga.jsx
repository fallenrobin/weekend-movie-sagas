import { takeEvery } from 'redux-saga/effects';
import fetchAllMovies from './FetchAllSaga';
import fetchDetail from './FetchDetailSaga';
//need these imports so this file knows about the generator functions to reference

import IndexSagas from './IndexSaga';
//I wanted to import only this but I'm missing a piece of the concept...

// Create the rootSaga generator function to listen for all dispatches
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAIL', fetchDetail);
}

export default rootSaga;