import { Link } from 'react-router-dom';
import Card from './components/Card/Card';
import styles from './home.module.scss';
import introBackground from '../../asset/image.png';

const HomePage = () => {
  const introStyle = {
    background: `url(${introBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <main className={styles.home}>
      {/* Intro */}
      <section className={styles.homeIntro} style={introStyle}>
        <div className={styles.homeIntroContent}>
          <p>Project manager</p>
          <h1>Hikmet Can Öyke & Abdulkadir Develioğlu</h1>
          <h3>
            <b>By </b>
            Çukurova Universitesi
          </h3>
        </div>
      </section>
      {/* Feed */}
      <section className={styles.homeContent}>
        {/* Navbar */}
        <div className={styles.homeContentNav}>
          <h1>Duyurular</h1>
          <Link>Daha fazlası için tıklayınız...</Link>
        </div>
        {/* Content */}
        <div className={styles.homeContentFeed}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
