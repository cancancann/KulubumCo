import React, { useEffect, useState } from 'react'
import styles from './club.module.scss';
import horsePhoto from '../../../asset/image_5.png';
import DuyuruNav from '../../../components/DuyuruNav/DuyuruNav'
import Card from '../../../components/Card/Card';
import axios from 'axios';

const ClubsPage = () => {
  const url = "http://localhost:4000/api/club"
  // const url2 = "http://localhost:4000/api/club/1"
  //{params:{page:1,limit:1}} //HATA VERİYOR.

  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => { setClubs(res.data.data) }).catch((err) => { console.log(err.response.data.message) })
  }, [])
  // console.log(clubs)

  return (
    <main className={styles.clubs} >
      <div className={styles.clubsTitle}>
        <DuyuruNav text='Kulüpler' />
      </div>
      <div className={styles.clubsContent}>
        {clubs.map((club) => (
          <Card key={club.ClubId}>
            <Card.Img photo={horsePhoto} />
            <Card.Body>
              <Card.Title>{club.UniversityName}</Card.Title>
              <Card.Owner >
                {club.ClubName}
              </Card.Owner>
            </Card.Body>
          </Card>
        ))}


      </div>
    </main>
  )
}

export default ClubsPage