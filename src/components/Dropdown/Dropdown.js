import paths from '../../Router/paths';
import styles from './dropdown.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import api from '../../api';
import { useAuth } from '../../context/authContext';

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

const Dropdown = ({ avatar, setActive }) => {
  const { invalidateCookie } = useAuth();

  const handleLogout = () => {
    api.auth.logout().finally(() => {
      invalidateCookie();
      setActive(false);
    });
  };

  return (
    <div className={styles.menu}>
      {/* Image section */}
      <div className={styles.menuAvatar}>
        <img src={avatar} alt="user" />
      </div>
      {/* Name */}
      <div className={styles.menuTitle}>Hikmet Can Öyke</div>
      {/* Buttons */}
      <div className={styles.menuLinks}>
        {menuItems.map((item) => (
          <Link to={item.path} onClick={() => setActive(false)}>
            {item.title}
          </Link>
        ))}

        <Button variant="contained" className="w-full" onClick={handleLogout}>
          Çıkış Yap
        </Button>
      </div>
    </div>
  );
};

export default Dropdown;
