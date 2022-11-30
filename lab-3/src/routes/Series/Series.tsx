import React from 'react';
import { series } from '../../mock/Series';
import SearchPage from '../../components/SearchPage/SearchPage';

function Series() {
  return <SearchPage prop={series} pageName="Characters" />;
}

export default Series;
