import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import styles from './notFound.module.scss';
import paths from '../../Router/paths';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <Navbar />
      <div className={styles.notFoundBody}>
        <img src={require('../../asset/notFound.png')} alt="" />
        <h1>Sayfa Bulunamadı</h1>
        <Link to={paths.home.default}>Anasayfaya geri dön</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
