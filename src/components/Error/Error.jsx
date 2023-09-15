import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorHeader}>
        <h1>Error 404</h1>
      </div>
      <div className={styles.errorMessage}>
        <p>La página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default Error;
