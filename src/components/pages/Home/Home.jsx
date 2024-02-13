import React from 'react';
import { Container, Paragraph, Title } from './Home.styled';
import car from '../../images/img.jpg';

export const Home = () => {
  return (
    <>
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

      <div style={{ marginTop: '30px' }}>
        <img src={car} alt="rental car company" />
      </div>
    </>
  );
};
