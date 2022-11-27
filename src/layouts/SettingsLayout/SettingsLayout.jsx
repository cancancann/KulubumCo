import React, { useState } from 'react';
import styles from './settings.module.scss';
// import { Outlet } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatar from '../../asset/ulas.png';
import { IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import paths from '../../Router/paths';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Menu from '../../components/Menu/Menu';
import Dropdown from '../../components/Dropdown/Dropdown';

const sidebarLinks = [
  {
    text: 'Edit Profile',
    path: paths.settings.default,
  },
  {
    text: 'Clubs',
    path: paths.settings.clubs,
  },
  {
    text: 'Takip Ettiklerim',
    path: paths.settings.follows,
  },
  {
    text: 'Kulüp Ekle ',
    path: paths.settings.addClub
  },
  {
    text: 'Password & Security',
    path: paths.settings.password,
  },
];

const SettingsLayout = () => {
  const [active, setActive] = useState(false);

  const activeTab = sidebarLinks.find((link) => link.path === window.location.pathname) || sidebarLinks[0];

  return (
    <div className={styles.layoutWrapper}>
      {/* Navbar */}
      <div className={styles.navbarWrapper}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            {/* Leftside */}
            <div className={styles.navbarLeft}>Setting</div>
            {/* rigtside */}
            <div className={styles.navbarRight}>
              <div className={styles.notification}>
                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </div>
              <div>
                <img src={avatar} alt="User" />
              </div>
              <Menu
                active={active}
                toggle={
                  <div className={styles.expandmore} onClick={() => setActive(!active)}>
                    <IconButton>
                      <ExpandMoreIcon />
                    </IconButton>
                  </div>
                }
              >
                {/* Menü tasarımı burada olacak */}
                <Dropdown avatar={avatar} />
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
      <div className={styles.container}>
        {/* ContainerContent */}
        <div className={styles.containerContent}>
          <div className={styles.containerContentBackground}></div>
          <div className={styles.containerContentProfile}>
            <img src={avatar} alt="user" />
            <div>
              <h2>ulaş öztürk</h2>
              <p>Your account is ready, you can now apply for advice.</p>
            </div>
          </div>
        </div>
        {/* containerMain */}
        <div className={styles.containerMain}>
          <div className={styles.containerMainLeft}>
            <ul>
              {sidebarLinks.map((item, key) => {
                return (
                  <li key={key}>
                    <Link
                      to={item.path}
                      className={
                        activeTab.path === item.path
                          ? classnames(styles.containerMainLeftItem, styles.active)
                          : styles.containerMainLeftItem
                      }
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.containerMainRight}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
