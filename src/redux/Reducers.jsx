import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/RootSaga';

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

//holds ONE movie that came back from the DB
const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            // console.log(`in singleMovie reducer ${action.payload.data[0]}`);
            return action.payload.data[0];
        default:
            return state;
    }
}

// Stores any/all movie genres for ONE clicked movie
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            // console.log('in genres reducer', action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
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