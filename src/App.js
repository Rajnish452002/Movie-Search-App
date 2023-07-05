import logo from './logo.svg';
import './App.css';



import { useEffect, useState } from 'react';


import SearchIcon from './search.svg';
import Moviecard from './Moviecard';


const API_URL = '  http://www.omdbapi.com/?i=tt3896198&apikey=237fb55e '

const movie1 =
{
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}




function App() {

  const [movies, setmovie] = useState([])
  const [searchterm , setsearchterm] = useState('')


  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setmovie(data.Search);
  }

  useEffect(() => {
    searchmovie('Spiderman')


  }, [])

  return (
    <div className="App" >

      <h1>Movie Arena</h1>

      <div className='search'>
        <input placeholder='Search for Movie'
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)
          }

        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovie(searchterm) }
        />


      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
              movies.map((movie)=>(
                <Moviecard movie={movie} />
              ))
            }
          </div>

        ) 
        :
        (
          <div className='empty' >
            <h2>No movies found</h2>
          </div>
        )
      }




    </div>
  );
}

export default App;
