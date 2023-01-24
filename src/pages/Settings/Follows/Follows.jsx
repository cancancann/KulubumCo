import React, { useState } from 'react';
import Card from './../../../components/Card/Card';
import { SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './follow.module.scss';
import cardImage from '../../../asset/image_3.jpg';
import { useAuth } from '../../../context/authContext';
import { useEffect } from 'react';
import api from '../../../api'

const Follows = () => {
  const { user, invalidateCookie } = useAuth();
  const [follows, setFollews] = useState([]);
  useEffect(() => {
    if (user && user.UserId) {
      api.follows.getFollowListByUserId(user.UserId).then(res => {
        if (res.data && res.data.success) {
          setFollews(res.data.data)
        }
      })
    }
  }, [user])
  return (
    <main className={styles.main}>
      {/* Title */}
      <SettingsTitle text="Takip Ettiklerim" />
      {/* container */}
      <div className={styles.mainContainer}>
        <div className={styles.mainContainerCard}>

          {follows.length > 0 ? follows.map(clups => {

            return (<Card className={styles.mainCard}>
              <Card.Img photo={cardImage} />
              <Card.Body>
                {/* <Card.Label>{clups.ClubName}</Card.Label> */}
                <Card.Title>{clups.ClubName.toUpperCase()}</Card.Title>
                <Card.Owner>
                  <b>{clups.UniversityName}</b>
                  {/* <b>By </b> */}
                  {/* Okçuluk Kulubü */}
                </Card.Owner>
                <Card.FollowButton clubId={clups.ClubId} status={true}></Card.FollowButton>
              </Card.Body>
            </Card>)
          })
            : null
          }
          {/* card */}
        </div>

      </div>
    </main>
  );
};

export default Follows;
