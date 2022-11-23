import React from 'react'
import { SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm'
import Card from '../../Homepage/components/Card/Card';
import styles from './club.module.scss';

const Clubs = () => {
    return (
        <main className={styles.main}>
            {/* Title */}
            <SettingsTitle text='Clubs' />
            {/* container */}
            <div className={styles.mainContainer}>
                {/* card */}
                <div className={styles.mainContainerCard}>
                    <Card />
                    <Card />
                </div>
                {/* button */}
                <SettingsSubmitButton>Save</SettingsSubmitButton>
            </div>
        </main>
    )
}

export default Clubs;