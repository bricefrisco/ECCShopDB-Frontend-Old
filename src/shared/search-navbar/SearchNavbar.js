import React from 'react';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import StoreIcon from '@material-ui/icons/Store';
import PersonIcon from '@material-ui/icons/Person';

import SearchNavbarItem from './SearchNavbarItem';
import './search-navbar.css';

export const SearchNavbar = ({ selectedPage }) => {
  return (
    <nav id='search-navbar' className='background-dark'>
      <div className='container'>
        <SearchNavbarItem
          uri='/search/chest-shops'
          selected={selectedPage === 'chest-shops'}
          icon={
            <LocalGroceryStoreIcon
              className={
                selectedPage === 'chest-shops'
                  ? 'search-navbar-icon color-primary'
                  : 'search-navbar-icon'
              }
            />
          }
          text='Chest Shops'
        />

        <SearchNavbarItem
          uri='/search/regions'
          selected={selectedPage === 'regions'}
          icon={
            <StoreIcon
              className={
                selectedPage === 'regions'
                  ? 'search-navbar-icon color-primary'
                  : 'search-navbar-icon'
              }
            />
          }
          text='Regions'
        />

        <SearchNavbarItem
          uri='/search/players'
          selected={selectedPage === 'players'}
          icon={
            <PersonIcon
              className={
                selectedPage === 'players'
                  ? 'search-navbar-icon color-primary'
                  : 'search-navbar-icon'
              }
            />
          }
          text='Players'
        />
      </div>
    </nav>
  );
};
