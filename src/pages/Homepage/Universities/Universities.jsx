import React, { useEffect } from 'react';
import Card from '../../../components/Card/Card';
import DuyuruNav from '../../../components/DuyuruNav/DuyuruNav';
import seftali from '../../../asset/seftali.png';
import styles from './universities.module.scss';
import { useState } from 'react';
import api from './../../../api/index';
import Spinner from './../../../components/Spinner';

const Universities = () => {

  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.universities
      .list()
      .then((res) => setUniversities(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.universities}>
      <DuyuruNav text="Üniversiteler" />
      <div className={styles.universitiesContent}>
        {loading ? (
          <Spinner position="center" />
        ) : (
          universities.map((university) => (
            <Card>
              <Card.Img photo={seftali} />
              <Card.Body>
                <Card.Label>{university.UniversityId}</Card.Label>
                <Card.Title>{university.UniversityName}</Card.Title>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </main>
  );
};

export default Universities;
