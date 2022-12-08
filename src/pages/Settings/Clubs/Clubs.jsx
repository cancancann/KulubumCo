import React, { useEffect } from 'react';
import { SettingsInput, SettingsTextarea, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './club.module.scss';
import { useState } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Modal';
import UploadSvg from '../../../asset/Vector.svg';
import Card from './../../../components/Card/Card';
import api from './../../../api/index';

const Clubs = () => {
  const [myClubs, setMyClubs] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    api.clubs.getClub(1,1)
    .then(res =>setMyClubs(res.data.data))
    .catch(err => console.log(err.response.data.message))
  },[])
  // console.log(myClubs)

  return (
    <main className={styles.main}>
      <Modal className={styles.modal} open={open} setOpen={setOpen}>
        {/* CONTAİNER */}
        <div className={styles.modalContainer}>
          {/* RESİM DİV */}
          <div className={styles.modalImg}>
            <img src={UploadSvg} alt="kadir" />
            <p>
              Resiminizi bu alana sürükleyin veya seçmek için
              <b> tıklayın.</b>
            </p>
          </div>
          {/* İNPUT */}
          <SettingsInput className={styles.titleInput} label="Duyuru Başlığı" placeholder="Kulüp Başlığını giriniz" />
          {/* DUYURU METNİ */}
          <div className={styles.modalTextarea}>
          <SettingsTextarea />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <Button variant="contained">Paylaş</Button>
          </div>
        </div>
      </Modal>
      {/* Title */}
      <div className={styles.mainTitle}>
        <SettingsTitle text="Clubs" />
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Duyuru Ekle
        </Button>
      </div>

      {/* container */}
      {myClubs.length ? (
        myClubs.map((club) => (
          <div className={styles.mainContainer}>
            <Card className={styles.mainContainerCard}>
              {/* <Card.Img photo={cardImage} /> */}
              <Card.Body>
                <Card.Label>{club.ClubId}</Card.Label>
                <Card.Title>{club.ClubName}</Card.Title>
                <Card.Owner>
                  <b>By </b>
                  {club.ClubMail}
                </Card.Owner>
                <Button onClick={()=>console.log('silindi')}>Sil</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <div className={styles.mainNotContainer}>
          <div className={styles.mainNot}>
            <h3>Üzgünüz! :( Herhangi bir klübe sahip değilsiniz.</h3>
          </div>
        </div>
      )}
    </main>
  );
};

export default Clubs;
