import React from 'react'
import styles from './duyuru.module.scss';

const DuyuruNav = ({text}) => {
    return (
        <div className={styles.duyuru}>
            <h1>{text}</h1>
            {/* <Link>Daha fazlası için tıklayınız...</Link> */}
        </div>
    )
}

export default DuyuruNav;