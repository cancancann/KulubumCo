import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './layout.module.scss';
import Footer from './../../components/Footer/Footer';
import paths from '../../Router/paths';
import { useDataContext } from '../../context/dataContext';
import { useState } from 'react';

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
              <Categories />
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

const Categories = () => {
  const data = useDataContext();
  const [page, setPage] = useState(1);
  const limit = 10;

  const universities = data?.universities.slice((page - 1) * limit, page * limit);

  const hasMore = data?.universities?.length > limit * page;

  return (
    <div className={styles.layoutSidebarContent}>
      {universities.map((university) => (
        <Link
          key={university?.UniversityId}
          className={styles.layoutSidebarItem}
          to={`${paths.home.clubsByUniversity}/${university.UniversityId}`}
        >
          <p>{university.UniversityName}</p>
          <span>({university?.ClubAmount})</span>
        </Link>
      ))}

      <div className={styles.paginate}>
        <button className={styles.paginateButton} disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Onceki
        </button>
        <div>{page}</div>
        <button className={styles.paginateButton} disabled={!hasMore} onClick={() => setPage((p) => p + 1)}>
          Sonraki
        </button>
      </div>
    </div>
  );
};
