import React from 'react';
import styles from './card.module.scss';
import photo from '../../../../asset/image_3.jpg'

const Card = () => {
  return (
    <div className={styles.card}>
      {/* Image side */}
      <div className={styles.cardImage}>
        <img
          alt="Card"
          src={photo}
        />
      </div>
      {/* Info Side */}
      <div className={styles.cardContent}>
        <span>Label</span>
        <h2>Çukurova Universitesi</h2>
        <h3>
          <b>By </b>
          Okculuk Klübü
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi facilis numquam dolore, aperiam sunt
          totam nemo nihil consequuntur iusto, harum nam voluptatibus, dolores molestiae modi error est rem sed.
        </p>
        <span>22 Agustos 2022</span>
      </div>
    </div>
  );
};

export default Card;
