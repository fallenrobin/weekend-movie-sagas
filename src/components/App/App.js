import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'

function App() {
  return (
    <div className="App">
      <h1 className="header">Cinematic Sagas vs Redux-Saga</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details">
          <MovieDetail />
        </Route>

        {/* Stretch: Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
