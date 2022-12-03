import React from 'react';
import SearchPage from '../../components/SearchPage/SearchPage';

import { comics } from '../../mock/Comics';

function Comics() {
  return <SearchPage prop={comics} pageName="Comics" />;
}

export default Comics;
