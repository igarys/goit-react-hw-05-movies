import { useEffect } from 'react';
import { useState } from 'react';

 const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState();

  useEffect(() => {
    const fetchPopularMovies =  () => {
     fetch(
       'https://api.themoviedb.org/3/trending/movie/day?api_key=9b869e87921daf5eab7f2f605ad1504f'
     )
       .then(response => response.json())
       .then(results => setPopularMovies(results.results))
       .catch(err => console.error(err));
    };
    fetchPopularMovies();
  }, []);
    
    console.log(popularMovies)
    return (
        <ul>
            {popularMovies?.map(popularMovie => (
                <li key={popularMovie.id}>{ popularMovie.original_title }</li>
            ))}
        </ul>
    )
};

export default PopularMovies;