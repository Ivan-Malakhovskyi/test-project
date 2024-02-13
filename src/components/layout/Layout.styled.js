import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BaseContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.mainBgColor};
  box-sizing: border-box;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 5px;
  border-bottom: 1px solid
    ${({ theme: { colors } }) => colors.primaryActiveBgColor};
  box-shadow: ${({ theme: { shadows } }) => shadows.boxShadow};
  background-color: #0056b3;
`;

export const Nav = styled.nav`
  display: flex;
  color: 'red';
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: wheat;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: ${({ theme: { colors } }) => colors.mainBlackColor};
    background-color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  }
`;
