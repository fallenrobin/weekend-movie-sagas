import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAIL', fetchDetail);

}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// get ONE movie from reducer
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

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            // console.log('in movies reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            console.log(`in singleMovie reducer ${action.payload.data[0]}`);
            return action.payload.data[0]; 
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('in genres reducer', action.payload);
            return action.payload.data[0];
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singleMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
