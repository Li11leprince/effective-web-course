import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../types/Card';
import classes from './Card.module.css';

const Scissors = (size: number, paragraph?: string) => {
  if (paragraph && paragraph.length < size) {
    return paragraph;
  }
  if (paragraph) return paragraph.substring(0, size - 3) + '...';
};

function Card(card: ICard) {
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
        {card.name ? (
          <h3 className={classes.card__title}>{Scissors(26, card.name)}</h3>
        ) : (
          <h3 className={classes.card__title}>{Scissors(26, card.title)}</h3>
        )}
        <p className={classes.card__description}>
          {card.description
            ? Scissors(119, card.description)
            : 'No description provided'}
        </p>
      </div>
    </Link>
  );
}

export default Card;
