import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 100px;
`;

export const EmptyFavorites = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlackColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;
