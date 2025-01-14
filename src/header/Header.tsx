/** @jsxImportSource @emotion/react */
import React from 'react';

import { headerContainer } from './styles';

import Name from './Name';
import Nav, { NavProps } from './Nav';

const Header: React.FC<NavProps> = ({ sections }) => {
  return (
    <div css={headerContainer}>
      <Name />
      <Nav sections={sections} />
    </div>
  );
}

export default Header;