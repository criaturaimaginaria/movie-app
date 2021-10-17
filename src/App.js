import React, {useEffect, UseState} from 'react';
import './App.css';
import Movie from './Components/Movie'

const MAIN_API = 'https://api.themoviedb.org/3/movie/550?api_key=2243846a2a712250e068e5d7ca8ea3ac';
const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2243846a2a712250e068e5d7ca8ea3ac';
const IMG_API = 'https_//image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie/?api_key=2243846a2a712250e068e5d7ca8ea3ac&query='

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
