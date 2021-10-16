import './App.css';
import Movie from './Components/Movie'

const MAIN_API = 'https://api.themoviedb.org/3/movie/550?api_key=2243846a2a712250e068e5d7ca8ea3ac'

function App() {

  const movies = [1,2,3]

  fetch(MAIN_API)
  .then((response) => response.json())
  .then((data)=>{
    console.log(data)
  })

  return (
    <div className="App">
      <header className="App-header">
       
     {movies.map(movie => <Movie /> )}

      
      </header>
    </div>
  );
}

export default App;
