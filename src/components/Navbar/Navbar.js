import styles from './navbar.module.scss';
import headerLogo from '../../asset/header_logo.png';
import avatar from '../../asset/avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '../Button';
import paths from '../../Router/paths';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Button from '../Button';
import { useState } from 'react';

const navItems = [
  {
    title: 'Anasayfa',
    path: paths.home.default,
  },
  {
    title: 'Universiteler',
    path: paths.home.default,
  },
  {
    title: 'Klüpler',
    path: paths.home.detailclub,
  },

  {
    title: 'Hakkımızda',
    path: paths.home.default,
  },
];

const menuItems = [
  {
    title: 'Profilim',
    path: paths.settings.default,
  },
  {
    title: 'Takip ettigim klüpler',
    path: paths.settings.follows,
  },
  {
    title: 'Üye olduğum klüpler',
    path: paths.settings.clubs,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Container */}
      <div className={styles.navbarContainer}>
        {/* Left Side */}
        <div className={styles.navbarLeft}>
          <Link to={paths.home.default}>
            <img src={headerLogo} alt="Kulubum.co" />
          </Link>
        </div>
        {/* Right Side */}
        <div className={styles.navbarRight}>
          {/* Navbar items */}
          <div className={styles.navbarItems}>
            {navItems.map((item) => (
              <Link to={item.path} key={item}>
                <Button sx={{ color: '#fff' }}>{item.title}</Button>
              </Link>
            ))}
            {/* Search */}
            <div className={styles.navbarSearch}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          {/* Avatar */}
          <Menu
            toggle={
              <IconButton>
                <div className={styles.navbarAvatar} onClick={() => setActive(!active)}>
                  <img src={avatar} alt="User" />
                </div>
              </IconButton>
            }
            active={active}
          >
            <div className={styles.navbarMenu}>
              {/* Image section */}
              <div className={styles.navbarMenuAvatar}>
                <img src={avatar} alt="user" />
              </div>
              {/* Name */}
              <div className={styles.navbarMenuTitle}>Hikmet Can Öyke</div>
              {/* Buttons */}
              <div className={styles.navbarMenuLinks}>
                {menuItems.map((item) => (
                  <Link to={item.path}>{item.title}</Link>
                ))}

                <Button variant="primary" onClick={() => setActive(false)}>
                  Çıkış Yap
                </Button>
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
