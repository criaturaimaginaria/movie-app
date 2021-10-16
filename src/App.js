import './App.css';
import Movie from './Components/Movie'

function App() {

  const movies = [1,2,3]
  return (
    <div className="App">
      <header className="App-header">
       
     {movies.map(movie => <Movie /> )}

      
      </header>
    </div>
  );
}

export default App;
