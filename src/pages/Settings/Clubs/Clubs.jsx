import React from 'react';
import { SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './club.module.scss';
import Card from './../../../components/Card/Card';
import cardImage from '../../../asset/image_3.jpg';

const Clubs = () => {
  return (
    <main className={styles.main}>
      {/* Title */}
      <SettingsTitle text="Clubs" />
      {/* container */}
      <div className={styles.mainContainer}>
        {/* card */}
        <Card className={styles.mainCard}>
          <Card.Img photo={cardImage} />
          <Card.Body>
            <Card.Label>In Label</Card.Label>
            <Card.Title>Çukurov Universitesi</Card.Title>
            <Card.Owner>
              <b>By </b>
              Okçuluk Kulubü
            </Card.Owner>
            <SettingsSubmitButton>Takip ediliyor</SettingsSubmitButton>
          </Card.Body>
        </Card>
        {/* button */}
      </div>
      <SettingsSubmitButton>Save</SettingsSubmitButton>
    </main>
  );
};

export default Clubs;
