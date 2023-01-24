import React, { useEffect } from 'react';
import { SettingsInput, SettingsTextarea, SettingsTitle } from '../components/settingsForm/SettingsForm';
import styles from './club.module.scss';
import { useState } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal/Modal';
import UploadSvg from '../../../asset/Vector.svg';
import Card from './../../../components/Card/Card';
import api from './../../../api/index';
import ConfirmModal from '../../../components/ConfirmModal/ConfirmModal';
import { useRef } from 'react';
import { useSnackbar } from 'notistack';

const Clubs = () => {
  const [myClubs, setMyClubs] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [activeClub, setActiveClub] = useState();
  const [error, setError] = useState({ headerError: null, textError: null })
  const headerRef = useRef(null);
  const descriptionRef = useRef(null)


  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    api.admin
      .getByUserId()
      .then((res) => setMyClubs(res.data.data))
      .catch((err) => console.log(err.response.data.message));
  }, []);
  // console.log(myClubs)

  const removeClubs = (item) => {
    //senin yazdığın
    // setMyClubs((current) => {
    //   return current.filter((club) => club.ClubId !== item.ClubId);
    // });

    //olması gereken böyle ellerine saglık bebegim senin tek eksik klübü databaseden silmiyorsun sayfayı yenileyince tekrar geliyor
    //klübü silme istegi at loading true
    // setIsDeleting(true);
    api.clubs.deleteClub(activeClub.ClubId).then(() => {
      //klüp silme işlemi başarılı
      setDeleteModal(false);
      setMyClubs((current) => {
        return current.filter((club) => club.ClubId !== activeClub.ClubId);
      });
    });

    // .finally(() => setIsDeleting(false));
  };
  const shareToPost = () => {
    let ErrorInfo = { headerError: null, textError: null }
    if (headerRef.current === null || headerRef.current.length < 10) {
      ErrorInfo.headerError = "En az 10 karakterli olmalı"
    }
    if (descriptionRef.current === null || descriptionRef.current.length < 10) {
      ErrorInfo.textError = "En az 10 karakterli olmalı"
    }
    if (ErrorInfo.headerError === null && ErrorInfo.textError === null) {
      let body = {
        PostHeader: headerRef.current,
        PostText: descriptionRef.current,
        ClubId: activeClub.ClubId
      }
      api.posts.create(body)
        .then((res) => {
          if (res?.data?.success) {
            enqueueSnackbar(res?.data?.message, { variant: 'success' });
            setPostModal(false)
          }
        })
        .catch((err) => {
          enqueueSnackbar(err?.response?.data?.message, { variant: 'error' });
        });
    } else {
      enqueueSnackbar("Tüm alanları eksiksiz doldurunuz", { variant: 'error', autoHideDuration: 2500 });

    }
    setError(ErrorInfo)
  }
  const fieldHandler = (field, value) => {
    field === "header" ? headerRef.current = value : descriptionRef.current = value
  }
  return (
    <main className={styles.main}>
      <Modal className={styles.modal} open={postModal} setOpen={setPostModal}>
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
          <SettingsInput ref={headerRef} error={error.headerError} className={styles.titleInput} label="Duyuru Başlığı" placeholder="Kulüp Başlığını giriniz" onChange={(e) => { fieldHandler("header", e.target.value) }} />
          {/* DUYURU METNİ */}
          <div className={styles.modalTextarea}>
            <SettingsTextarea error={error.textError} ref={descriptionRef} onChange={(e) => { fieldHandler("description", e.target.value) }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <Button variant="contained" onClick={() => { shareToPost() }}>Paylaş</Button>
          </div>
        </div>
      </Modal>
      <Modal className={styles.modal} open={editModal} setOpen={setEditModal}>
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
            <Button variant="contained" onClick={() => shareToPost()}>Paylaş</Button>
          </div>
        </div>
      </Modal>
      <ConfirmModal
        open={deleteModal}
        setOpen={setDeleteModal}
        title="Klübü Sil"
        content={
          <>
            <b>{activeClub?.ClubName} </b>
            Silinsin mi? bu işlem geri alınamaz.
          </>
        }
        onOk={removeClubs}
      />
      {/* Title */}
      <div className={styles.mainTitle}>
        <SettingsTitle text="Clubs" />
        <Button
          onClick={() => {
            setPostModal(true);
          }}
        >
          Duyuru Ekle
        </Button>
      </div>

      {/* container */}
      <div className={styles.mainContainer}>
        {myClubs.length ? (
          myClubs.map((club) => (
            <Card key={club.ClubId} className={styles.mainContainerCard}>
              {/* <Card.Img photo={cardImage} /> */}
              <Card.Body>
                <Card.Label>In label</Card.Label>
                <Card.Title>{club.ClubName}</Card.Title>
                <Card.Owner>
                  <b>By </b>
                  {club.ClubMail}
                </Card.Owner>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      // removeClubs(club);
                      setDeleteModal(true);
                      setActiveClub(club);
                    }}
                  >
                    Sil
                  </Button>
                  <Button
                    style={{ marginLeft: '1rem' }}
                    onClick={() => {
                      setActiveClub(club);
                      setPostModal(true)
                    }}
                  >
                    {' '}
                    Duyuru yayınla
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className={styles.mainNotContainer}>
            <div className={styles.mainNot}>
              <h3>Üzgünüz! :( Herhangi bir klübe sahip değilsiniz.</h3>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Clubs;
