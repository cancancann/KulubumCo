import React, { useEffect, useState } from 'react';
import styles from './club.module.scss';
import horsePhoto from '../../../asset/image_5.png';
import { DuyuruSearchNav } from '../../../components/DuyuruNav/DuyuruNav';
import Card from '../../../components/Card/Card';
import api from '../../../api';
import Spinner from '../../../components/Spinner';
import { useParams } from 'react-router-dom';
// import educationLogo from '../../../asset/education.jpg';
import { useInView } from 'react-intersection-observer';

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const params = useParams();
  const universityId = params?.universityId;
  const { inView, ref } = useInView();

  useEffect(() => {
    const limit = 5;
    if (page === 1) {
      setLoading(true);
    }
    if (universityId) {
      //UniversityId varsa universityIdye göre get istegi at
      api.clubs
        .getClubsByUniversity({ universityId, page, limit })
        .then((res) => {
          setClubs(res.data.data);
        })
        .finally(() => setLoading(false));
    } else {
      //universityId yoksa normal listeleme yap tüm klüpleri getir
      const payload = {
        page,
        limit,
      };
      if (search.trim().length >= 2) {
        payload.name = search;
      }

      api.clubs
        .getClub(payload)
        .then((res) => {
          setClubs((previous) => [...previous, ...res.data.data]);
        })
        .catch((err) => console.log(err.response.data.message))
        .finally(() => setLoading(false));
    }
  }, [page, search, universityId]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <main className={styles.clubs}>
      <DuyuruSearchNav title="Kulüpler" onChange={setSearch} searchQ={search} placeholder="Klüp ara" />
      <div className={styles.clubsContent}>
        {loading ? (
          <Spinner position="center" />
        ) : (
          <>
            {clubs.map((club) => (
              <Card key={club.ClubId}>
                <Card.Img photo={horsePhoto} />
                <Card.Body>
                  <Card.Label> {club.ClubId}</Card.Label>
                  <Card.Title>{club.ClubName}</Card.Title>
                  <Card.Owner>{club.UniversityName}</Card.Owner>
                  <Card.Caption>{club.Description}</Card.Caption>
                  <Card.FollowButton status={club.isFollowed} clubId={club.ClubId}>
                    Takip et
                  </Card.FollowButton>
                </Card.Body>
              </Card>
            ))}
            <div ref={ref}>sayfanın sonu...</div>
          </>
        )}
      </div>
    </main>
  );
};

export default ClubsPage;
