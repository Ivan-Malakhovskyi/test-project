import styled from 'styled-components';
import { ReactComponent as VerticalLine } from '../../images/line.svg';

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
  margin: 0 auto;
  column-gap: 29px;
  row-gap: 50px;
  padding-bottom: 100px;
`;

export const AdvertItem = styled.li`
  flex-basis: calc((100% - 2 * 29px) / 3);
  position: relative;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const AdvertImage = styled.img`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
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
`;

export const TopicMake = styled.h3`
  color: ${({ theme: { colors } }) => colors.mainBlackColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  font-weight: 500;
  line-height: 1.5;
`;

export const Wrapper = styled.div`
  width: 270px;
  height: 40px;
  margin-bottom: 28px;
`;

export const ListInfoItem = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Line = styled(VerticalLine)`
  margin-right: 6px;
  margin-left: 6px;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  height: 44px;
  color: ${({ theme: { colors } }) => colors.mainBgColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  font-family: inherit;
  border-radius: 12px;
  padding: 12px 99px;
  background-color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  border: none;
  cursor: pointer;
  outline: none;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.addBlueColor};
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  margin: 0 auto;
  color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  padding-bottom: 150px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.addBlueColor};
  }
`;
