import { About, Button, ButtonContainer, MovieCard } from 'App.styled';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// const Cast = lazy(() => import('components'));
// const Reviews = lazy(() => import('components'));
// const loader = () => <p>LOADING...</p>;


 const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [cast, setCast] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9b869e87921daf5eab7f2f605ad1504f`
      );
      const movie = await response.json();
      setMovieDetails(movie);
    };
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickCast = () => {
    const fetchCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9b869e87921daf5eab7f2f605ad1504f`
      );
      const cast = await response.json();
      setCast(cast);
    };
    fetchCast();
  };
  const clickReviews = () => {
    const fetchReviews = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9b869e87921daf5eab7f2f605ad1504f`
      );
      const reviews = await response.json();
      setReviews(reviews);
    };
    fetchReviews();
  };

  const movie = { ...movieDetails };
  const genres = movie.genres;
  const actors = { ...cast }.cast;
   const reviewList = { ...reviews }.results;
   const reviewTotal = { ...reviews }.total_results;

  return (
    <div>
      <div style={{ display: 'flex', gap: 6 }}>
        <About>
          <h2 style={{ marginBlock: 10 }}>{movie.title}</h2>
          {movie.overview}
          <ButtonContainer>
            <Link to={`/movies/${movieId}/cast`}>
              <Button onClick={clickCast} type="button">
                Cast
              </Button>
            </Link>
            <Link to={`/movies/${movieId}/reviews`}>
              <Button onClick={clickReviews} type="button">
                Reviews
              </Button>
            </Link>
          </ButtonContainer>
        </About>
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}
              `}
            alt={'movie poster'}
          />
          <div style={{ display: 'flex', gap: 6 }}>
            <p>{movie.release_date}</p>
            <ul style={{ display: 'flex', gap: 6 }}>
              {genres?.map(genre => (
                <li style={{ listStyleType: 'none' }} key={genre.id}>
                  | {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </MovieCard>
      </div>
      {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
      <Cast actors={actors} />
      <Reviews reviews={reviewList} reviewTotal={reviewTotal} />
      {/*    
      </Suspense> */}
    </div>
  );
};

export default MovieDetails;