import { useEffect } from 'react';
import { BackDrop, ButtonClose, ModalContent } from './Modal.styled';
import iconClose from '../images/x.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, close }) => {
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

  return createPortal(
    <BackDrop onClick={handleBackDropClose}>
      <ModalContent>
        <ButtonClose>
          <img src={iconClose} alt="" onClick={close} />
        </ButtonClose>
        {children}
      </ModalContent>
    </BackDrop>,
    modalRoot
  );
};
