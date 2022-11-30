import React from 'react'
import { Link } from 'react-router-dom';
import styles from './duyuru.module.scss';

const DuyuruNav = ({text,link}) => {
    return (
        <div className={styles.duyuru}>
            <h1>{text}</h1>
            <Link to={link?.to}>{link?.text}</Link>
        </div>
    )
}

export default DuyuruNav;