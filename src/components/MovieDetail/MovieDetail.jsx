
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function MovieDetail() {

    const history = useHistory();


    return (

        <>
            <h1>Movie details</h1>

            <button onClick={()=>{history.push('/')}}>Return to list</button>
        </>

    )
}


export default MovieDetail;