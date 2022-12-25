import React from 'react';
import { Link } from 'react-router-dom';
import classes from './EntityPage.module.css';
import { IEntity } from '../../types/Entity';
import { IAll } from '../../types/AllEntities';
import { useTranslation } from 'react-i18next';

interface Iint {
  entity: IAll[];
}

function EntityPage({ entity }: Iint) {
  const { t } = useTranslation();
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <img
          src={`${entity[0].thumbnail.path}.${entity[0].thumbnail.extension}`}
          alt=""
          className={classes.imgBackground}
        />
        <img
          src={`${entity[0].thumbnail.path}.${entity[0].thumbnail.extension}`}
          alt=""
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <>
          <div className={classes.info__column}>
            <h1 className={classes.info__name}>
              {entity[0].name ?? entity[0].title}
            </h1>
            <p className={classes.info__description}>{entity[0].description}</p>
          </div>
          {entity[0].characters ? (
            <div className={classes.info__column}>
              {entity[0].characters ? (
                <h2 className={classes.info__title}>{t('characters_title')}</h2>
              ) : null}
              {entity[0].characters
                ? entity[0].characters.items.map((link) => {
                    return (
                      <Link
                        to={
                          '/' +
                          link.resourceURI.replace(
                            'http://gateway.marvel.com/v1/public/',
                            ''
                          )
                        }
                        className={classes.info__link}
                        key={link.resourceURI}
                      >
                        {link.name}
                      </Link>
                    );
                  })
                : null}
            </div>
          ) : null}
          {entity[0].series ? (
            <div className={classes.info__column}>
              {entity[0].series ? (
                <h2 className={classes.info__title}>{t('series_title')}</h2>
              ) : null}
              {entity[0].series ? (
                entity[0].series.resourceURI ? (
                  <Link
                    to={
                      '/' +
                      entity[0].series.resourceURI.replace(
                        'http://gateway.marvel.com/v1/public/',
                        ''
                      )
                    }
                    className={classes.info__link}
                    key={entity[0].series.resourceURI}
                  >
                    {entity[0].series.name}
                  </Link>
                ) : (
                  entity[0].series.items?.map((link) => {
                    return (
                      <Link
                        to={
                          '/' +
                          link.resourceURI.replace(
                            'http://gateway.marvel.com/v1/public/',
                            ''
                          )
                        }
                        className={classes.info__link}
                        key={link.resourceURI}
                      >
                        {link.name}
                      </Link>
                    );
                  })
                )
              ) : null}
            </div>
          ) : null}
          {entity[0].comics ? (
            <div className={classes.info__column}>
              {entity[0].comics ? (
                <h2 className={classes.info__title}>{t('comics_title')}</h2>
              ) : null}
              {entity[0].comics
                ? entity[0].comics.items.map((link) => {
                    return (
                      <Link
                        to={
                          '/' +
                          link.resourceURI.replace(
                            'http://gateway.marvel.com/v1/public/',
                            ''
                          )
                        }
                        className={classes.info__link}
                        key={link.resourceURI}
                      >
                        {link.name}
                      </Link>
                    );
                  })
                : null}
            </div>
          ) : null}
        </>
      </div>
    </div>
  );
}

export default EntityPage;
