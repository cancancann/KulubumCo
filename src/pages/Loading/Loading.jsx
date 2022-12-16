import React from 'react';
import Spinner from '../../components/Spinner';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spinner position="center" />
      Yükleniyor
    </div>
  );
};

export default Loading;
