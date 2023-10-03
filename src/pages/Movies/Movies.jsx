import { Container } from "App.styled"
import { useState } from "react";
import { useEffect } from "react";

export const Movies = () => {

    const [movies, setMovies] = useState();
    const [input, setInput] = useState('');
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        setQuery(input);
        setInput('');
    }

     useEffect(() => {
       const fetchMovies = () => {
         fetch(
           `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=9b869e87921daf5eab7f2f605ad1504f`
         )
           .then(response => response.json())
           .then(movies => setMovies(movies.results))
           .catch(err => console.error(err));
       };
       fetchMovies();
     }, [query]);
    
console.log(movies)
    return (
      <div>
        <Container>
          <input onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
        </Container>
        <ul>
          {movies?.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        </ul>
      </div>
    );
}