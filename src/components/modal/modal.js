import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children, closeModalPath, onRemove }) => {

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const handleCloseModal = () => {
    onRemove()
    navigate(closeModalPath);
  };

  const keydownHandler = ({ key }) => {
    if (key === 'Escape') {
      handleCloseModal();
    }
  };

  return ReactDOM.createPortal(<div className={styles.modals}>
    <ModalOverlay onClose={handleCloseModal} />
    <div className={styles.modal}>{children}</div>
  </div>, document.getElementById('react-modals'));
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
