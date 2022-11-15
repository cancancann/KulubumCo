import React from 'react';
import styles from './spinner.module.scss';

function Spinner({ size = 36 }) {
  const spinnerStyle = {
    width: size,
    height: size,
  };

  return (
    <div className={styles.container}>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner} style={spinnerStyle}></div>
      </div>
    </div>
  );
}

export default Spinner;
