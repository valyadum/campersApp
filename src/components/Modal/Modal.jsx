import ModalCard from 'components/ModalCard/ModalCard';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({ onClose, id }) {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleCloseKeyPress);
    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <Overlay>
      <ModalStyle onClose={onClose}>
        <ModalCard id={id} onClose={onClose} />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
}
