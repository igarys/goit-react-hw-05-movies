import { Nav, StyledLink } from 'App.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>

        <Outlet />
     
    </div>
  );
};
