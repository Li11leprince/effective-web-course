import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

const Scissors = (paragraph: string, size: number) => {
  if (paragraph.length < size) {
    return paragraph;
  }
  return paragraph.substring(0, size - 3) + '...';
};

function Card(card: {
  id: number;
  thumbnail: { path: string; extension: string };
  name: string;
  description: string | null;
}) {
  return (
    <Link to={String(card.id)} className={classes.card}>
      <div className={classes.card__upper}>
        <img
          src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
          alt=""
          className={classes.card__img}
        />
      </div>

      <div className={classes.card__bottom}>
        <h3 className={classes.card__title}>{Scissors(card.name, 26)}</h3>
        <p className={classes.card__description}>
          {card.description
            ? Scissors(card.description, 119)
            : 'No description provided'}
        </p>
      </div>
    </Link>
  );
}

export default Card;
