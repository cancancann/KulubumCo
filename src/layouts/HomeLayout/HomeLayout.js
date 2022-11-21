import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './layout.module.scss';
import Footer from './../../components/Footer/Footer';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <div className={styles.layoutContainer}>
          <section className={styles.layoutContent}>
            <Outlet />
          </section>
          <section className={styles.layoutSidebar}>
            {/* Kategori */}
            <div className={styles.layoutSidebarContainer}>
              <div className={styles.layoutSidebarTitle}>Kategori</div>
              {/* Contents */}
              <div className={styles.layoutSidebarContent}>
                {categories.map((category, key) => (
                  <Link key={key} className={styles.layoutSidebarItem} to={'/login'}>
                    <p>{category.name}</p>
                    <span>({category.count})</span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Banner */}
            <div className={styles.layoutBanner}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate deserunt quos iusto,
              commodi, incidunt maiores natus alias est aspernatur autem voluptatum corporis facilis dolor aliquid
              consequuntur. Tenetur, autem aut.
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;

const categories = [
  {
    name: 'Marmara Universitesi',
    count: 5,
  },
  {
    name: 'Cukurova Universitesi',
    count: 12,
  },
  {
    name: 'Adıyaman Universitesi',
    count: 100,
  },
  {
    name: 'Mersin Universitesi',
    count: 300,
  },
];
