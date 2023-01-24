import React, { useEffect, useState } from 'react';
import styles from './settings.module.scss';
// import { Outlet } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatar from '../../asset/avatar2.png';
import { IconButton } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import paths from '../../Router/paths';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Menu from '../../components/Menu/Menu';
// import Dropdown from '../../components/Dropdown/Dropdown';
import { useAuth } from '../../context/authContext';
import { SvgCamera } from '../../asset/icons';
import api from '../../api';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const sidebarLinks = [
  {
    text: 'Edit Profile',
    path: paths.settings.default,
  },
  {
    text: 'Klüplerim',
    path: paths.settings.clubs,
  },
  {
    text: 'Takip Ettiklerim',
    path: paths.settings.follows,
  },
  {
    text: 'Kulüp Ekle ',
    path: paths.settings.addClub,
  },
  {
    text: 'Password & Security',
    path: paths.settings.password,
  },
];

const SettingsLayout = () => {
  const [active, setActive] = useState(false);
  const { user, invalidateCookie } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [profilImg, setProfilImg] = useState(null)
  const BaseUrl = "http://localhost:4000/api/uploads/profileImg/"

  const activeTab = sidebarLinks.find((link) => link.path === window.location.pathname) || sidebarLinks[0];
  useEffect(() => {
    if (user) {
      api.user.getProfileImage().then(res => {
        if (res.data.success && res.data && res.data.data !== "default.png") {
          let baseUrl = BaseUrl + res.data.data
          setProfilImg(baseUrl)
        } else {
          setProfilImg(avatar)
        }
      }).catch(err => {
        setProfilImg(avatar)
      })
    }
  }, [user])

  const handleProfileImageChange = (e) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    if (file.type.split('/')[0] !== 'image') return enqueueSnackbar('Geçersiz dosya tipi', { variant: 'error' });
    const payload = new FormData();
    payload.append('media', e.target.files[0]);
    api.user
      .changeProfileImage(payload)
      .then((res) => {
        if (res.data.success && res.data.data && res.data.data.ProfileImg) {
          let baseUrl = BaseUrl + res.data.data.ProfileImg
          setProfilImg(baseUrl)
          enqueueSnackbar('Profil resmi başarıyla güncellendi!', { variant: 'success' });
        }

      })
      .catch((e) => enqueueSnackbar(e.response?.data?.message || 'Beklenmedik bir hata oluştu!', { variant: 'error' }));
  };

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
                <img src={profilImg} alt="user" style={{ borderRadius: "50%" }} />

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
                <ul className={styles.navbarMenuList}>
                  <li className={styles.navbarMenuListItem}>
                    <Link to={paths.home.default}>Anasayfa</Link>
                  </li>

                  <li className={styles.navbarMenuListItem}>
                    <button
                      to={paths.home.default}
                      onClick={() =>
                        api.auth.logout().then(() => {
                          navigate(paths.home.default);
                          setTimeout(() => {
                            invalidateCookie();
                          }, 100);
                        })
                      }
                    >
                      Çıkış Yap
                    </button>
                  </li>
                </ul>
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
            <div className={styles.containerContentProfileEdit}>
              <img src={profilImg} alt="user" style={{ borderRadius: "50%" }} />

              <input type="file" onChange={handleProfileImageChange} />
              <SvgCamera />
            </div>
            <div>
              <h2>@{user.Username}</h2>
              <p>Hesap, klüp işlemlerinizi buradan yürütebilirsiniz</p>
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
