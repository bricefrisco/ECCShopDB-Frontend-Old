import React from 'react';

import NavItem from './NavItem';
import './navbar.css';

export const Navbar = ({ selectedPage }) => {
  return (
    <header id='navbar' className='background-black'>
      <div className='container flex flex-between flex-center'>
        <img src='/img/logo.png' id='logo' alt='Logo' />
        <nav id='navigation'>
          <NavItem uri='/home' text='Home' selected={selectedPage === 'home'} />
          <NavItem
            uri='/search/chest-shops'
            text='Search'
            selected={selectedPage === 'search'}
          />
          <a
            href='https://ecocitycraft.com/forum/threads/shopdb-applications-suggestions-bug-reports-feedback-faq.205318/'
            rel='noopener noreferrer'
            target='_blank'
            className='nav-item'
          >
            Forum
          </a>
        </nav>
      </div>
    </header>
  );
};
