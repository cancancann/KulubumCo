import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './home.module.scss';
import introBackground from '../../asset/image.png';
import cardImage from '../../asset/image_3.jpg'
import Button from './../../components/Button/';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const introStyle = {
    background: `url(${introBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <main className={styles.home}>
      <Modal open={open} setOpen={setOpen}>
        <Card className={styles.postModal}>
          <Card.Img photo={cardImage} />
          <Card.Body>
            <Card.Label>In Label</Card.Label>
            <Card.Title>Cukurova Universitesi</Card.Title>
            <Card.Owner>
              <b>By </b>
              Okçuluk Kulubü
            </Card.Owner>
            <Card.Caption>
              molestiae eveniet. Id laborum ipsum quo corporis deserunt, porro perferendis quaerat quis aut ex quos
              fugit impedit dolores officia debitis asperiores architecto saepe. Esse sit asperiores fuga dolores velit
              ipsa repudiandae natus, ut, id, voluptatum perspiciatis? Ipsum inventore possimus harum veniam aut
              delectus blanditiis perspiciatis voluptatibus, maxime deserunt consequatur repellendus ex nam quia? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Est velit nesciunt error eligendi. Ex adipisci vel,
              mollitia corrupti velit itaque autem similique repellendus nesciunt vitae nisi tempore praesentium
              corporis voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sint voluptates dicta
              cum eius praesentium, ducimus a dolores pariatur. Unde dolorum nam minima, atque harum eum pariatur
              deserunt odit perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel eligendi a
              illo laboriosam reiciendis iure quo corporis ex voluptatum autem quos, nulla dolore expedita odit sunt
              repellendus molestias. Natus! Mollitia, nulla tenetur. Illo a aspernatur quae alias deserunt mollitia
              ipsum expedita, officia placeat fugit eveniet doloribus qui veniam temporibus nulla voluptatum quod nemo
              facilis non ea. Doloremque, dolores libero. Minima, alias! Numquam harum sunt accusamus ab tempore.
              Temporibus minus quidem voluptas maiores, consectetur ea cupiditate officia, quo iste itaque ratione atque
              dolorum ut ducimus obcaecati accusamus odit. Dicta, aliquid. Numquam, eum iste non quos excepturi commodi
              quisquam dolorum possimus harum laborum ut eligendi tempore alias eius quae assumenda necessitatibus
              fugiat maxime cumque ipsum atque quo. Quasi itaque molestiae similique? Autem sunt ad maiores voluptates
              asperiores distinctio obcaecati officia magni ab consectetur, tempore earum! Cumque nisi deleniti tempore
              perferendis a nulla expedita, cum nostrum aliquid, ullam dolores numquam laudantium beatae? Quidem
              eligendi voluptate aperiam quibusdam blanditiis dignissimos beatae vero laboriosam. Mollitia esse unde
              veritatis deleniti possimus laudantium. Magnam consequuntur sapiente nam, culpa quidem libero quos, itaque
              aut, sit eaque nihil! Accusamus, sapiente aut! Sit odio ipsa rerum aliquam tempore, assumenda ullam eos
              expedita. Enim minima neque omnis, atque architecto earum deleniti eligendi beatae et facere, ipsa
              mollitia voluptatibus laboriosam odit. Mollitia officia autem tempora perferendis doloribus commodi?
              Nobis, molestiae! Commodi repudiandae excepturi culpa eaque enim, magnam ullam unde? Perferendis deleniti
              corporis laborum aut at voluptates dolorem et accusamus molestias ipsum. Doloremque laboriosam ipsum
              explicabo ab minus, illum autem provident maiores voluptatibus temporibus id expedita amet tenetur
              accusamus cumque rerum dolores fugiat enim impedit! Culpa nam incidunt quaerat quam quasi laudantium?
              Dolor minima rem soluta blanditiis cum pariatur, expedita iste quidem quo saepe, obcaecati natus nam quod
              neque a repudiandae laborum odio, dicta fugit reiciendis voluptate. Cumque eaque libero ratione. Suscipit?
            </Card.Caption>
            <Card.Date>22 Agustus 2022</Card.Date>
          </Card.Body>
        </Card> 
      </Modal>
      {/* Intro */}
      <section className={styles.homeIntro} style={introStyle}>
        <div className={styles.homeIntroContent}>
          <p>Project manager</p>
          <h1>Hikmet Can Öyke & Abdulkadir Develioğlu</h1>
          <h3>
            <b>By </b>
            Çukurova Universitesi
          </h3>
        </div>
      </section>
      {/* Feed */}
      <section className={styles.homeContent}>
        {/* Navbar */}
        <div className={styles.homeContentNav}>
          <h1>Duyurular</h1>
          <Link>Daha fazlası için tıklayınız...</Link>
        </div>
        {/* Content */}
        <div className={styles.homeContentFeed}>
          <Card>
            <Card.Img photo={cardImage} />
            <Card.Body>
              <Card.Label>In Label</Card.Label>
              <Card.Title>Cukurova Universitesi</Card.Title>
              <Card.Owner>
                <b>By </b>
                Okçuluk Kulubü
              </Card.Owner>
              <Card.Caption>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy
              </Card.Caption>
              <div className="flex justify-between items-center">
                <Card.Date>22 Agustus 2022</Card.Date>
                <Button onClick={() => setOpen(true)}>Detayları gör</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
