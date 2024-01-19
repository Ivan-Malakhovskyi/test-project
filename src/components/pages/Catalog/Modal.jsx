import React, { useEffect } from 'react';
import { BackDrop, ButtonClose, Container, ModalContent } from './Modal.styled';
import iconClose from '../../images/x.svg';

export const Modal = ({ car, close }) => {
  useEffect(() => {
    const handleCloseEsc = e => {
      if (e.code === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleCloseEsc);
    return () => document.removeEventListener('keydown', handleCloseEsc);
  }, [close]);

  const handleBackDropClose = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClose}>
      <ModalContent>
        <Container>
          <h4>Title</h4>

          <ButtonClose>
            <img src={iconClose} alt="" onClick={() => close()} />
          </ButtonClose>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            tempore provident, iste velit in natus delectus earum necessitatibus
            id adipisci?
          </p>
        </Container>
      </ModalContent>
    </BackDrop>
  );
};
