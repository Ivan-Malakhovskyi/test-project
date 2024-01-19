import styled from 'styled-components';

export const Container = styled.div`
  //   margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1)
  max-width: 541px;
  max-height: 752px;
  overflow-y: auto;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  stroke: ${({ theme: { colors } }) => colors.primaryBlueColor};

  &:hover {
    transform: scale(1.2);
    stroke: ${({ theme: { colors } }) => colors.addBlueColor};
  }
`;
