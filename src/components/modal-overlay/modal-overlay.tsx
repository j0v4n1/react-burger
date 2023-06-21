import styles from './modal-overlay.module.css';
import { IModalOverlay } from './modal-overlay.types';

const ModalOverlay: React.FC<IModalOverlay> = ({ onClose }) => {
  return <div onClick={onClose} className={styles.modal}></div>;
};

export default ModalOverlay;
