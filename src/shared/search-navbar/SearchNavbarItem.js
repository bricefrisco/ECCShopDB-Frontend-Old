import React from 'react';
import { Link } from 'react-router-dom';

const SearchNavbarItem = ({ selected, icon, text, uri }) => {
  return (
    <Link
      to={uri}
      className={`${
        selected ? 'selected color-primary weight-bold ' : ''
      } search-navbar-item inline-flex flex-center`}
    >
      {icon}
      {text}
    </Link>
  );
};

export default SearchNavbarItem;
