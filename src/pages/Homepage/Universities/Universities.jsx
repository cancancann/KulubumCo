import React from 'react';
import Card from '../../../components/Card/Card';
import { DuyuruSearchNav } from '../../../components/DuyuruNav/DuyuruNav';
import education from '../../../asset/education.jpg';
import styles from './universities.module.scss';
import { useDataContext } from '../../../context/dataContext';
import { getCityByCode } from '../../../helpers/city';
import useSearch from './../../../hooks/useSearch';
import { Link } from 'react-router-dom';
import paths from './../../../Router/paths';

const Universities = () => {
  const { universities } = useDataContext();

  const { query, setQuery, result } = useSearch(universities, filterFunction);

  return (
    <main className={styles.universities}>
      <DuyuruSearchNav
        title="Üniversiteler"
        searchQ={query}
        placeholder="İsme veya şehre göre ara"
        onChange={setQuery}
      />
      <div className={styles.universitiesContent}>
        {result.map((university) => (
          <Card key={university.UniversityId}>
            <Card.Img photo={education} />
            <Card.Body>
              <Card.Title>
                <Link
                  to={`${paths.home.clubsByUniversity}/${university.UniversityId}`}
                  className={styles.universitiesContentItem}
                >
                  {university.UniversityName}
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Universities;

const filterFunction = (university, query) => {
  const q = query.toLowerCase();
  //İsme göre veya şehre göre ara
  return (
    university?.UniversityName?.toLowerCase().includes(q) ||
    getCityByCode(university?.SehirId)?.name.toLowerCase().includes(q)
  );
};
