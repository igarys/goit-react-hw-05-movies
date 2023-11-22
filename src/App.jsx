// import { StyledLink } from "App.styled";
import { Route, Routes } from 'react-router-dom';
// import { } from './pages'
// import { Nav, StyledLink } from "App.styled";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import MoviesList from "pages/MoviesList/MoviesList";
import { lazy, Suspense } from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// import MoviesList from "pages/MoviesList/MoviesList";
import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

//  const Home = lazy(() => import('./pages/Home'))
//  const MovieDetails = lazy(() => import('./pages/MovieDetails'))
//  const Movies = lazy(() => import('./pages/Movies'));
const MoviesList = lazy(() => import('pages/MoviesList/MoviesList'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />}>
              <Route
                path="/movies"
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <MoviesList />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
