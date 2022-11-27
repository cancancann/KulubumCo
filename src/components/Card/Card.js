import React from 'react';
import styles from './card.module.scss';
import cn from 'classnames';

const Card = ({ children, style, className }) => {
  const cardStyle = {
    ...style,
  };
  return (
    <div className={cn(styles.card, className)} style={cardStyle}>
      {children}
    </div>
  );
};

const CardImage = ({ photo, alt }) => {
  return (
    <div className={styles.cardImage}>
      <img alt={alt} src={photo} />
    </div>
  );
};

const CardBody = ({ children, className }) => {
  return <div className={cn(styles.cardContent, className)}>{children}</div>;
};

const CardLabel = ({ children }) => {
  return <span className={styles.cardLabel}>{children}</span>;
};

const CardTitle = ({ children }) => {
  return <h2 className={styles.cardTitle}>{children}</h2>;
};

const CardOwner = ({ children }) => {
  return <h3 className={styles.cardOwner}>{children}</h3>;
};
const CardCaption = ({ children }) => {
  return <p className={styles.cardCaption}>{children}</p>;
};

const CardDate = ({ children }) => {
  return <span className={styles.cardDate}>{children}</span>;
};

//Compused Components
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Date = CardDate;
Card.Img = CardImage;
Card.Caption = CardCaption;
Card.Owner = CardOwner;
Card.Label = CardLabel;

export default Card;
