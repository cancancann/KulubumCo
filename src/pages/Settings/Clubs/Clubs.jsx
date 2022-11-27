import React from 'react';
import { SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './club.module.scss';
import Card from './../../../components/Card/Card';
import cardImage from '../../../asset/image_3.jpg';
import { useState } from 'react';



const Clubs = () => {
  const [myClubs, setMyClubs] = useState([]);
  return (
    <main className={styles.main}>
      {/* Title */}
      <SettingsTitle text="Clubs" />
      {/* container */}
      <div className={styles.mainContainer}>
        {
          myClubs.length ?
            <Card className={styles.mainCard}>
              <Card.Img photo={cardImage} />
              <Card.Body>
                <Card.Label>In Label</Card.Label>
                <Card.Title>Çukurov Universitesi</Card.Title>
                <Card.Owner>
                  <b>By </b>
                  Okçuluk Kulubü
                </Card.Owner>
              </Card.Body>
            </Card>
          :
            <div className={styles.mainNot}>
              <h3>
                Üzgünüz! :( Herhangi bir kulübe üye değilsiniz.
              </h3>
            </div>
        }
      </div>
    </main>
  );
};

export default Clubs;
