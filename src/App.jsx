// import { StyledLink } from "App.styled";
import { Route, Routes } from "react-router-dom"
import { Home, Movies } from './pages'
import { Nav, StyledLink } from "App.styled";

export const App = () => {


  
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
        <Route path="movies" element={<Movies/> } />
      </Routes>
    </div>
  );
};
