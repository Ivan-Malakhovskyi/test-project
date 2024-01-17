import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BaseContainer = styled.div`
  padding: 0 15px;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.mainBgColor};
  box-sizing: border-box;
`;

export const Header = styled.header`
  padding: 5px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => colors.primaryActiveBgColor};
  box-shadow: ${({ theme: { shadows } }) => shadows.boxShadow};
`;

export const Nav = styled.nav`
  display: flex;
  color: 'red';
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: 'black';
    background-color: orangered;
  }
`;
