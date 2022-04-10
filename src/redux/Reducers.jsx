import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/RootSaga';

// Used to store all movies returned from the server on GET from page load
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            // console.log('in movies reducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

//holds ONE movie that comes back from the DB
//(after GET triggered by movie poster click)
const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            // console.log(`in singleMovie reducer ${action.payload.data[0]}`);
            return action.payload.data[0];//path to the relevant movie array
        default:
            return state;
    }
}

// Stores any/all movie genres for the clicked movie
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            // console.log('in genres reducer', action.payload.data);
            return action.payload.data; //path to the relevant genre array
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use; gets imported into index.js
export const storeInstance = createStore(
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

export default storeInstance;