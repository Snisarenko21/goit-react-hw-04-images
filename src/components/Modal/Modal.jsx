import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>{children} </div>
    </div>,
    modalRoot
  );
}

export default Modal;
