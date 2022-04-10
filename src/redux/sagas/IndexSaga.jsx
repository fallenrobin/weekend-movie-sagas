//import both sagas and combine them
import fetchAllMovies from "./FetchAllSaga";
import fetchDetail from "./FetchDetailSaga";


export default function* IndexSagas() {
    yield [
        fetchAllMovies(),
        fetchDetail(),
    ]
}