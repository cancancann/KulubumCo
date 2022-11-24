import React from 'react'
import Card from '../../Homepage/components/Card/Card';
import { SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm'
import styles from './follow.module.scss';


const Follows = () => {
  return (
    <main className={styles.main}>
            {/* Title */}
            <SettingsTitle text='Takip Ettiklerim' />
            {/* container */}
            <div className={styles.mainContainer}>
                {/* card */}
                <div className={styles.mainContainerCard}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                {/* button */}
                <SettingsSubmitButton>Save</SettingsSubmitButton>
            </div>
        </main>
  )
}

export default Follows