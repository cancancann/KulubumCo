import styles from './navbar.module.scss';
import headerLogo from '../../asset/header_logo.png';
import avatar from '../../asset/avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import Button, { IconButton } from '../Button';

const Navbar = () => {
  const navItems = ['Beranda', 'Tutorial', 'Pemrograman', 'İletişim'];

  return (
    <nav className={styles.navbar}>
      {/* Container */}
      <div className={styles.navbarContainer}>
        {/* Left Side */}
        <div className={styles.navbarLeft}>
          <img src={headerLogo} alt="Kulubum.co" />
        </div>
        {/* Right Side */}
        <div className={styles.navbarRight}>
          {/* Navbar items */}
          <div className={styles.navbarItems}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            {/* Search */}
            <div className={styles.navbarSearch}>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          {/* Avatar */}
          <div className={styles.navbarAvatar}>
            <img src={avatar} alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
