import styled from 'styled-components';

export const ModalContent = styled.div`
  @media screen and (min-width: 768px) {
    width: 460px;
  }
`;

export const ModalImage = styled.img`
  // width: 461px;
  height: auto;
  border-radius: 14px;
  margin-bottom: 14px;
  margin-top: 20px;
`;

export const WrapperModalInfo = styled.div`
  margin-top: 8px;
  margin-bottom: 14px;
`;

export const Paragraph = styled.p`
  color: ${({ theme: { colors } }) => colors.mainBlackColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42; /* 142.857% */
  margin-bottom: 24px;
`;

export const AddInfo = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const AddWrapper = styled.div`
  margin-bottom: 24px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalItem = styled.li`
  color: ${({ theme: { colors } }) => colors.addBlackColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  background-color: ${({ theme: { colors } }) => colors.addWhiteColor};
  padding: 7px 14px;
  border-radius: 35px;
`;

export const Rental = styled.span`
  color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ModalButton = styled.button`
  padding: 12px 50px;
  width: 168px;

  color: ${({ theme: { colors } }) => colors.mainBgColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  background-color: ${({ theme: { colors } }) => colors.primaryBlueColor};
  font-family: inherit;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 12px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.addBlueColor};
  }
`;
