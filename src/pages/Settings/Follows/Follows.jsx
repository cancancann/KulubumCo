import React from 'react';
import Card from './../../../components/Card/Card';
import { SettingsSubmitButton, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './follow.module.scss';
import cardImage from '../../../asset/image_3.jpg';

const Follows = () => {
  return (
    <main className={styles.main}>
      {/* Title */}
      <SettingsTitle text="Takip Ettiklerim" />
      {/* container */}
      <div className={styles.mainContainer}>
        {/* card */}
        <div className={styles.mainContainerCard}>
          <Card className={styles.mainCard}>
            <Card.Img photo={cardImage} />
            <Card.Body>
              <Card.Label>In Label</Card.Label>
              <Card.Title>Çukurov Universitesi</Card.Title>
              <Card.Owner>
                <b>By </b>
                Okçuluk Kulubü
              </Card.Owner>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SettingsSubmitButton>Takip ediliyor</SettingsSubmitButton>
              </div>
            </Card.Body>
          </Card>

          <Card className={styles.mainCard}>
            <Card.Img photo={cardImage} />
            <Card.Body>
              <Card.Label>In Label</Card.Label>
              <Card.Title>Çukurov Universitesi</Card.Title>
              <Card.Owner>
                <b>By </b>
                Okçuluk Kulubü
              </Card.Owner>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SettingsSubmitButton>Takip ediliyor</SettingsSubmitButton>
              </div>
            </Card.Body>
          </Card>

          <Card className={styles.mainCard}>
            <Card.Img photo={cardImage} />
            <Card.Body>
              <Card.Label>In Label</Card.Label>
              <Card.Title>Çukurov Universitesi</Card.Title>
              <Card.Owner>
                <b>By </b>
                Okçuluk Kulubü
              </Card.Owner>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SettingsSubmitButton>Takip ediliyor</SettingsSubmitButton>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Follows;
