import React from 'react';
import SearchPage from '../../components/SearchPage/SearchPage';

import { characters } from '../../mock/Characters';

function Characters() {
  return <SearchPage prop={characters} pageName="Characters" />;
}

export default Characters;
