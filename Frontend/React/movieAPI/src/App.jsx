import { useState } from 'react'
import './App.css'
import Movie from './components/Movie';

function App() {
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  //IMPORTING FROM THE .env FILE
  //Movie Will STORE OUR DATA THAT IS RETRIVED FROM THE API
  const [movies, setMovies] = useState([
    {
      id: 0,
      poster_path: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      title: "Avengers: Infinity War",
      overview: "The Avengers fight Thanos."
    },
    {
      id: 1,
      poster_path: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      title: "The Avengers",
      overview: "The Avengers fight Loki."
    }
  ])
  //STORES WHAT THE USER TYPED IN TO SEARCH FOR
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = (searchTerm) => {

    //url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=fecf69185102eddbfe487f3e00556f31'
    const baseUrl = 'https://api.themoviedb.org/3/'
    const route = `search/movie?query=${searchTerm}&api_key=${apiKey}`
    const endpoint = baseUrl + route;



    fetch(endpoint)
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json()
        } else {
          throw Error("Oops something went wrong")
        }
      })
      .then(data => {
        console.log(data)
        setMovies(data.results)
        setSearchTerm("")
      })
      .catch(error => {
        console.log("error during fetch:", error)
      })
  }

  const serachChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }



  return (
    <>

      <div className="App">
        <h1>Movie Search</h1>
        <div className="searchBar">
          <input type="text" id="inputField" placeholder="Enter a Movie Title" onChange={serachChangeHandler} value={searchTerm} />
          <button onClick={() => performSearch(searchTerm)}>Search</button>

        </div>
        {
          movies.map(movie => (
            < Movie key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              vote_average={movie.vote_average} />
          ))
        }
      </div>

    </>
  )
}

export default App
