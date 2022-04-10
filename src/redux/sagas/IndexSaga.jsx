//imports both sagas and combine them
import fetchAllMovies from "./FetchAllSaga";
import fetchDetail from "./FetchDetailSaga";

//in theory this consolidates both sagas to make them accessible,
//but I haven't quite figured out how/where to use it as an import
export default function* IndexSagas() {
    yield [
        fetchAllMovies(),
        fetchDetail(),
    ]
}