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
`;

export const Container = styled.div`
  padding: 1.2rem;
  display: flex;
  gap: 0.1rem;
`;

export const MovieCard = styled.div`
  margin: 20px;
  width: 500px;
  gap: 0.1rem;
`;

export const About = styled.div`
  display: flex;
  margin-left: 15px;
  text-align: justify;
  font-size: 18px;
  margin: 20px;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 2rem;
  padding: calc(0.875rem - 5px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
