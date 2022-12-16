import styles from './navbar.module.scss';
import headerLogo from '../../asset/header_logo.png';
import avatar from '../../asset/avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '../Button';
import paths from '../../Router/paths';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Button from '../Button';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { SvgVerticalEllipsis, SvgX } from '../../asset/icons';

const navItems = [
  {
    title: 'Anasayfa',
    path: paths.home.default,
  },
  {
    title: 'Universiteler',
    path: paths.home.universities,
  },
  {
    title: 'Kulüpler',
    path: paths.home.clubs,
  },

  {
    title: 'Hakkımızda',
    path: paths.home.detailClub,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { isAuth } = useAuth();
  const location = useLocation();
  const [hamburger, setHamburger] = useState(false);

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
              <Link to={item.path} key={item.path}>
                <Button
                  variant="contained"
                  className={item.path === location.pathname ? styles.navbarItemActive : styles.navbarItem}
                >
                  {item.title}
                </Button>
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
          {isAuth ? (
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
              <Dropdown avatar={avatar} setActive={setActive} />
            </Menu>
          ) : (
            <Button>
              <Link to={paths.login}>Giriş Yap</Link>{' '}
            </Button>
          )}
          <div className={styles.navbarHamburger}>
            <button onClick={() => setHamburger((h) => !h)}>{hamburger ? <SvgX /> : <SvgVerticalEllipsis />}</button>

            {hamburger && (
              <div className={styles.navbarHamburgerMenu}>
                {navItems.map((item) => (
                  <Link
                    to={item.path}
                    key={item.path}
                    className={styles.navbarHamburgerMenuItem}
                    onClick={() => setHamburger(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
