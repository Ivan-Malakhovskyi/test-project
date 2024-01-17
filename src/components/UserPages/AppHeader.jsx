import { Header, Nav } from 'components/layout/Layout.styled';
import React from 'react';
import { StyledLink } from 'components/layout/Layout.styled';

export const AppHeader = () => {
  return (
    <Header>
      <Nav>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favoirtes</StyledLink>
        </li>
      </Nav>
    </Header>
  );
};
