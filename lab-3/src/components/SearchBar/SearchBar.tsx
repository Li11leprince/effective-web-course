import React, { useEffect, useMemo, useState } from 'react';
import classes from './SearchBar.module.css';
import { observer } from 'mobx-react-lite';
import useDebounce from '../../hooks/useDebounce';
import { useTranslation } from 'react-i18next';

//stores
import searchStore from '../../stores/SearchStore';
import pageStore from '../../stores/PageStore';

function SearchBar(props: { pageName: string; count: number }) {
  const { t } = useTranslation();
  const placeHolder = t('search');
  const [nameStartsWithClick, setNameStartsWithClick] = useState('');
  searchStore.getNameStartWith(useDebounce(nameStartsWithClick, 3000));
  return (
    <div className={classes.main}>
      <div className={classes.conteiner}>
        <h1 className={classes.pageName}>
          {props.pageName}{' '}
          <span className={classes.quantity}>({props.count})</span>
        </h1>
        <div className={classes.searchBar}>
          <input
            type="text"
            placeholder={placeHolder}
            className={classes.searchBar__input}
            onChange={(e) => {
              setNameStartsWithClick(e.target.value);
              pageStore.delPage();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default observer(SearchBar);
