import React from 'react';
import { Link } from 'react-router-dom';
import styles from './duyuru.module.scss';

const DuyuruNav = ({ title, link }) => {
  return (
    <div className={styles.duyuru}>
      <h1>{title}</h1>
      <Link to={link?.to}>{link?.text}</Link>
    </div>
  );
};

const DuyuruSearchNav = ({ title, searchQ, placeholder, onChange }) => {
  return (
    <div className={styles.duyuru}>
      <h1>{title}</h1>
      <input
        type="search"
        value={searchQ}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={styles.duyuruSearchbar}
      />
    </div>
  );
};

export { DuyuruSearchNav };
export default DuyuruNav;
