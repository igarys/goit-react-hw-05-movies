import { clear } from "@testing-library/user-event/dist/clear";
import { Container } from "App.styled"
import { MoviesList } from "pages/MoviesList";
import { useState } from "react";
import { useEffect } from "react";
import { parsePath } from "react-router-dom";

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
           `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&region=US&api_key=9b869e87921daf5eab7f2f605ad1504f`
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
          <input name='inputV' onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
        </Container>
        <MoviesList movies={movies} query={ query} />
      </div>
    );
}