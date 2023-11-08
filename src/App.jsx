// import { StyledLink } from "App.styled";
import { Route, Routes } from "react-router-dom"
import { Home, Movies, MoviesList } from './pages'
import { Nav, StyledLink } from "App.styled";

export const App = ({query}) => {


  
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movies" element={<Movies />}/>
          <Route path={`?query=${query}`} element={<MoviesList/> } />
      
      </Routes>
    </div>
  );
};
