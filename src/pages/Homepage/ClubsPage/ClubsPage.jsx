import React from 'react'
import styles from './club.module.scss';
import horsePhoto from '../../../asset/image_5.png';
import DuyuruNav from '../../../components/DuyuruNav/DuyuruNav'
import Card from '../../../components/Card/Card';

const ClubsPage = () => {
  return (
    <main className={styles.clubs} >
            <div className={styles.clubsTitle}>
                <DuyuruNav text='Kulüpler' />
            </div>
            <div className={styles.clubsContent}>
                <Card>
                    <Card.Img photo={horsePhoto} />
                    <Card.Body>
                        <Card.Title>Seftali Universitesi</Card.Title>
                        <Card.Owner >
                          Okçuluk kulübü
                        </Card.Owner>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={horsePhoto} />
                    <Card.Body>
                        <Card.Title>Seftali Universitesi</Card.Title>
                        <Card.Owner >
                          Okçuluk kulübü
                        </Card.Owner>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={horsePhoto} />
                    <Card.Body>
                        <Card.Title>Seftali Universitesi</Card.Title>
                        <Card.Owner >
                          elektrik kulübü
                        </Card.Owner>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={horsePhoto} />
                    <Card.Body>
                        <Card.Title>Seftali Universitesi</Card.Title>
                        <Card.Owner >
                          dağcılık kulübü
                        </Card.Owner>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img photo={horsePhoto} />
                    <Card.Body>
                        <Card.Title>Seftali Universitesi</Card.Title>
                        <Card.Owner >
                          atçılık kulubü
                        </Card.Owner>
                    </Card.Body>
                </Card>
            </div>
        </main>
  )
}

export default ClubsPage