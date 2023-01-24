import React from 'react'
import styles from './detail.module.scss';
import photo from '../../asset/clubs3.jpg'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import horsePhoto from '../../asset/image_5.png';





const DetailClub = () => {
    const introStyle = {
        background: `url(${photo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <main>
            <section className={styles.detailIntro} style={introStyle}>
                <div className={styles.detailIntroContent}>
                    <h1>Atcılık Kulubü</h1>
                    <h2>Çukurova Üniversitesi</h2>
                </div>
            </section>
            {/* ICERİK */}
            <section className={styles.detailContent}>
                {/* DUYURULAR */}
                <div className={styles.detailContentNav}>
                    <h1>Duyurular</h1>
                    <Link>Daha fazlası için tıklayınız...</Link>
                </div>
                {/* CONTENT */}
                <div className={styles.detailContentFeed}>
                    <Card>
                        <Card.Img photo={horsePhoto} />
                        <Card.Body>
                            <Card.Label>In Label</Card.Label>
                            <Card.Title>Marmara Universitesi</Card.Title>
                            <Card.Owner>
                                <b>By </b>
                                Okçuluk Kulubü
                            </Card.Owner>
                            <Card.Caption>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </Card.Caption>
                            <Card.Date>22 Agustus 2022</Card.Date>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img photo={horsePhoto} />
                        <Card.Body>
                            <Card.Label>In Label</Card.Label>
                            <Card.Title>Marmara Universitesi</Card.Title>
                            <Card.Owner>
                                <b>By </b>
                                Okçuluk Kulubü
                            </Card.Owner>
                            <Card.Caption>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </Card.Caption>
                            <Card.Date>22 Agustus 2022</Card.Date>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img photo={horsePhoto} />
                        <Card.Body>
                            <Card.Label>In Label</Card.Label>
                            <Card.Title>Marmara Universitesi</Card.Title>
                            <Card.Owner>
                                <b>By </b>
                                Okçuluk Kulubü
                            </Card.Owner>
                            <Card.Caption>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </Card.Caption>
                            <Card.Date>22 Agustus 2022</Card.Date>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img photo={horsePhoto} />
                        <Card.Body>
                            <Card.Label>In Label</Card.Label>
                            <Card.Title>Marmara Universitesi</Card.Title>
                            <Card.Owner>
                                <b>By </b>
                                Okçuluk Kulubü
                            </Card.Owner>
                            <Card.Caption>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy
                            </Card.Caption>
                            <Card.Date>22 Agustus 2022</Card.Date>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </main>
    )
}

export default DetailClub