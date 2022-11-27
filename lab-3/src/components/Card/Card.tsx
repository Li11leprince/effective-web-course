import React from 'react';
import Classes from './Card.module.css';

const Scissors = (paragraph: string, size: number) => {
  if (paragraph.length < size) {
    return paragraph;
  }
  return paragraph.substring(0, size - 3) + '...';
};

function Card(card: {
  thumbnail: { path: string; extension: string };
  name: string;
  description: string;
}) {
  return (
    <div className={Classes.card}>
      <div className={Classes.card__upper}>
        <img
          src={`${card.thumbnail.path}.${card.thumbnail.extension}`}
          alt=""
          className={Classes.card__img}
        />
      </div>

      <div className={Classes.card__bottom}>
        <h3 className={Classes.card__title}>{Scissors(card.name, 26)}</h3>
        <p className={Classes.card__description}>
          {card.description
            ? Scissors(card.description, 119)
            : 'No description provided'}
        </p>
      </div>
    </div>
  );
}

export default Card;
