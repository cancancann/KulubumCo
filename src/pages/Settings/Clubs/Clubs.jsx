import React from 'react';
import { SettingsInput, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './club.module.scss';
import { useState } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Modal';
import UploadSvg from '../../../asset/Vector.svg';

const Clubs = () => {
  // const [myClubs, setMyClubs] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.main}>

      <Modal className={styles.modal} open={open} setOpen={setOpen}>
        {/* CONTAİNER */}
        <div className={styles.modalContainer}>
          {/* RESİM DİV */}
          <div className={styles.modalImg}>
            <img src={UploadSvg} alt='kadir' />
            <p>
              Resiminizi bu alana sürükleyin veya seçmek için
              <b> tıklayın.</b>
            </p>
          </div>
          {/* İNPUT */}
          <SettingsInput className={styles.titleInput} label='Duyuru Başlığı' placeholder='Kulüp Başlığını giriniz' />
          {/* DUYURU METNİ */}
          <div className={styles.modalTextarea}>
            <textarea value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummyLorem Ipsum is simply dummy text of the printing and typesetting industry
            . Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply 
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy"/>
          </div>
          <div style={{display:'flex',justifyContent:'flex-end',marginTop:'1rem'}}>
            <Button variant='contained'>Paylaş</Button>
          </div>
        </div>
      </Modal>


      {/* Title */}
      <div className={styles.mainTitle}>
        <SettingsTitle text="Clubs" />
        <Button onClick={() => { setOpen(true) }}>Duyuru Ekle</Button>
      </div>

      {/* container */}
      {/* {myClubs.length ? (
        <div className={styles.mainContainer}>
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
        </div>
      ) : (
        <div className={styles.mainNotContainer}>
          <div className={styles.mainNot}>
            <h3>Üzgünüz! :( Herhangi bir kulübe üye değilsiniz.</h3>
          </div>
        </div>
      )} */}
      <div className={styles.mainNotContainer}>
        <div className={styles.mainNot}>
          <h3>Üzgünüz! :( Herhangi bir kulübe üye değilsiniz.</h3>
        </div>
      </div>
    </main>
  );
};

export default Clubs;
