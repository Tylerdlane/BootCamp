import React from 'react'

const Movie = ({id, poster_path, title, release_date, vote_average, overview}) => {
   return(
    <div key={id} style={ { marginBottom: "5rem" } }>
    <img src={'https://image.tmdb.org/t/p/w185/' + poster_path} alt="Movie Poster" />
    <h2>{title}</h2>
    <p>Release: {release_date}</p>
    <p>Vote Average: {vote_average}</p>
    <p>Overview: {overview}</p>
  </div>
   )
}

export default Movie