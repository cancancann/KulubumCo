import styles from './modal.module.scss';
const Modal = ({ children, open, setOpen }) => {
  if (open)
    return (
      <div className={styles.modal}>
        <div className={styles.modalBg} onClick={() => setOpen(false)}></div>
        {children}
      </div>
    );
};

export default Modal;
