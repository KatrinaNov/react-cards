import React from 'react';
import styles from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.arc}></div>
      <div className={styles.arc}></div>
      <div className={styles.arc}></div>
    </div>
  );
};

export default Preloader;