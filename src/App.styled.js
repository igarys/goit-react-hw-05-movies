import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
export const Nav = styled.nav`
   display: flex;
   gap: 1.2rem;
   padding: 1.2rem;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Header = styled.h2`
   padding-left: 2rem;
`

export const Container = styled.div`
   padding: 1.2rem;
   display: flex;
   gap: 0.1rem;
`