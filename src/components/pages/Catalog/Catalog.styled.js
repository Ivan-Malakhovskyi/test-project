import styled from 'styled-components';

export const Topic = styled.h1`
  color: ${({ theme: { colors } }) => colors.mainBlackColor};
  margin-bottom: 72px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
`;

export const AdvertList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const AdvertItem = styled.li`
  flex-basis: calc((100% - 2 * 29px) / 3);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const AdvertImage = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ButtonAdd = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
`;
