import React from 'react'
import Card from '../../../components/Card/Card'
import DuyuruNav from '../../../components/DuyuruNav/DuyuruNav'
import seftali from '../../../asset/seftali.png';
import styles from './universities.module.scss';

const Universities = () => {
    return (
        <main className={styles.universities} >
            <div className={styles.universitiesTitle}>
                <DuyuruNav text='Üniversiteler' />
            </div>
            <div className={styles.universitiesContent}>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Seftali Universitesi</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Cukurova Universitesi</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Kral Universitesi</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Adana Universitesi</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>İskenderun Universitesi</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Bursa Universitesi</Card.Title>
                    </Card.Body>
                </Card> <Card>
                    <Card.Img photo={seftali} />
                    <Card.Body>
                        <Card.Label>In Label</Card.Label>
                        <Card.Title>Uludağ Universitesi</Card.Title>
                    </Card.Body>
                </Card>

            </div>
        </main>
    )
}

export default Universities