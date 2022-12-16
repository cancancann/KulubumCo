import React from 'react';
import styles from './confirm.module.scss';
import Modal from '../Modal/Modal';

const ConfirmModal = ({ open, setOpen, title, content, onOk }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={styles.modalContainer}>
        <h1>{title}</h1>
        <hr />
        <div className={styles.modalContent}>{content}</div>
        <div className={styles.modalActions}>
          <button className="bg-rose-200" onClick={onOk}>
            Evet
          </button>
          <button onClick={() => setOpen(false)}>Hayır</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
