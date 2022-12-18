import React from 'react';
import styles from './card.module.scss';
import cn from 'classnames';
import api from '../../api';
import { useState } from 'react';

const Card = ({ key, children, style, className }) => {
  const cardStyle = {
    ...style,
  };
  return (
    <div key={key} className={cn(styles.card, className)} style={cardStyle}>
      {children}
    </div>
  );
};

const CardImage = ({ photo, alt, className, ...others }) => {
  return (
    <div {...others} className={cn(styles.cardImage, className)}>
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

const CardTitle = ({ children, className, style }) => {
  return (
    <h2 className={cn(styles.cardTitle, className)} style={style}>
      {' '}
      {children}
    </h2>
  );
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

const Follow = ({ children, status = false, clubId, ...props }) => {
  const [followStatus, setFollowStatus] = useState(status);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    api.clubs
      .follow(clubId)
      .then((res) => {
        setFollowStatus(res.data?.followStatus);
      })
      .finally(() => setLoading(false));
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={loading}
      variant={followStatus ? 'follow' : 'none'}
      className={styles.cardFollow}
    >
      {followStatus ? 'Takibi bırak' : 'Takip et'}
    </button>
  );
};

//Compused Components
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Date = CardDate;
Card.Img = CardImage;
Card.Caption = CardCaption;
Card.Owner = CardOwner;
Card.Label = CardLabel;
Card.FollowButton = Follow;

export default Card;
