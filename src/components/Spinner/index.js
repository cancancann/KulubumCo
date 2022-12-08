import React from 'react';
import styles from './spinner.module.scss';

function Spinner({ size = 36, position = 'left' }) {
  const spinnerStyle = {
    width: size,
    height: size,
  };

  const justifyContent = position === 'center' ? 'center' : position === 'right' ? 'flex-end' : 'flex-start';

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent }}>
      <div className={styles.container}>
        <div className={styles.loaderContainer}>
          <div className={styles.spinner} style={spinnerStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
