import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
`;

export const ModalContent = styled.div`
  position: relative;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  padding: 16px 40px 40px 40px;
  border-radius: 24px;
  background-color: white;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 8px;
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
