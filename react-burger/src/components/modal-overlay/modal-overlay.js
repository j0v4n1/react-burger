import styles from "./modal-overlay.module.css";
import ReactDOM from "react-dom";
import {Transition} from 'react-transition-group';
import {useRef} from "react";

const ModalOverlay = ({children, isVisibleModal, onClose}) => {

  const duration = 500;

  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    visibility: 'hidden',
    opacity: 0,
  }

  const transitionStyles = {
    entering: {opacity: 1, visibility: 'visible'},
    entered: {opacity: 1, visibility: 'visible'},
    exiting: {opacity: 0, visibility: 'hidden'},
    exited: {opacity: 0, visibility: 'hidden'},
  };

  const modalRoot = document.getElementById("react-modals");

  return ReactDOM.createPortal(
    <Transition nodeRef={nodeRef} in={isVisibleModal} timeout={duration} unmountOnExit mountOnEnter>
      {state => (
        <div onClick={onClose} ref={nodeRef} className={styles.modal} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )
      }
    </Transition>,
    modalRoot
  );
};

export default ModalOverlay;
