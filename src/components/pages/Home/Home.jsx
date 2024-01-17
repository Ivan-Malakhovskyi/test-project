import React from 'react';
import { Container, Paragraph, Title } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Title>Welcome to our car rental company!</Title>
      <Paragraph>
        We offer a wide selection of rental cars to suit different needs and
        budgets.
      </Paragraph>
      <ul>
        <li>Car rental</li>
        <li>Insurance plans and service packages available</li>
      </ul>
    </Container>
  );
};
