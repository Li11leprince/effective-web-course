import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EntityPage.module.css';
import { IEntity } from '../../types/Entity';

function EntityPage(entity: IEntity) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <img
          src={`${entity.thumbnail.path}.${entity.thumbnail.extension}`}
          alt=""
          className={classes.imgBackground}
        />
        <img
          src={`${entity.thumbnail.path}.${entity.thumbnail.extension}`}
          alt=""
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <>
          <div className={classes.info__column}>
            <h1 className={classes.info__name}>{entity.name}</h1>
            <p className={classes.info__description}>{entity.description}</p>
          </div>
          <div className={classes.info__column}>
            <h2 className={classes.info__title}>{entity.firstLinkTitle}</h2>
            {entity.firstLinks.map((link) => {
              return (
                <Link
                  to={link.link}
                  className={classes.info__link}
                  key={link.link}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          {entity.secondLinks ? (
            <div className={classes.info__column}>
              <h2 className={classes.info__title}>{entity.secondLinkTitle}</h2>
              {entity.secondLinks?.map((link) => {
                return (
                  <Link
                    to={link.link}
                    className={classes.info__link}
                    key={link.link}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default EntityPage;
