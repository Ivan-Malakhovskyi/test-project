import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 150px;
  gap: 18px;
`;

export const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.mainGreyColor};
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  color: ${({ theme: { colors } }) => colors.mainBlackColor};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;
  padding: 14px 89px 14px 18px;
  border-radius: 14px;
  background-color: ${({ theme: { colors } }) => colors.addGreyBgColor};
  border: none;

  &::-webkit-scrollbar {
    width: 8px;
    height: auto;
    border-radius: 10px;
    background-color: rgba(18, 20, 23, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    padding: 14px 8px 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background-color: ${({ theme: { colors } }) => colors.mainBgColor};

    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
`;

export const Option = styled.option`
  display: inline-flex;
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const BtnSearch = styled.button`
  width: 136px;
  height: 48px;
  color: ${({ theme: { colors } }) => colors.mainBgColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.433;
  font-family: inherit;
  padding: 14px 44px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 18px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.addBlueColor};
  }
`;
