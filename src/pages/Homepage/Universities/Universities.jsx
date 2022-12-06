import React, { useEffect } from 'react'
import Card from '../../../components/Card/Card'
import DuyuruNav from '../../../components/DuyuruNav/DuyuruNav'
import seftali from '../../../asset/seftali.png';
import styles from './universities.module.scss';
import axios from 'axios';
import { useState } from 'react';

const Universities = () => {

    const url = "http://localhost:4000/api/university/";

    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => setUniversities(res.data.data)).catch(err => console.log(err.response.message))
    }, [])
    console.log(universities);
    return (
        <main className={styles.universities} >
            <div className={styles.universitiesTitle}>
                <DuyuruNav text='Üniversiteler' />
            </div>
            <div className={styles.universitiesContent}>

                {universities.map((university) => (
                    <Card>
                        <Card.Img photo={seftali} />
                        <Card.Body>
                            <Card.Label>{university.UniversityId}</Card.Label>
                            <Card.Title>{university.UniversityName}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}


            </div>
        </main>
    )
}

export default Universities