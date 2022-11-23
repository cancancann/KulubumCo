import React from 'react'
import styles from './layout.module.scss';
import avatar from '../../asset/avatar.png';
import { Outlet } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DetailClub = () => {
    return (
        <>
            <div className={styles.navbar}>
                {/* Leftside */}
                <div className={styles.navbarSetting}>
                    Setting
                </div>
                {/* rigtside */}
                <div className={styles.navbarAvatar}>
                    <div className={styles.notification}>
                        <NotificationsIcon />
                    </div>
                    <div>
                        <img src={avatar} alt="User" />
                    </div>
                    <div className={styles.expandmore}>
                        <ExpandMoreIcon />
                    </div>

                </div>
            </div>
            <div className={styles.layout}>
                <div className={styles.layoutTitle}>
                    <div className={styles.layoutColor}></div>
                    <div className={styles.layoutContent}>
                        {/* image */}
                        <h2>Ulaş Öztürk</h2>
                        <p>Your account is ready</p>
                    </div>
                </div>
                <div className={styles.layoutMain}>
                    <div className={styles.layoutMainEdit}>
                        right side
                    </div>
                    <div className={styles.layoutMainOutle}>
                        leftside
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailClub