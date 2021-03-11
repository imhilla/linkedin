import React from 'react';
import './Header.css';
import { Search } from '@material-ui/icons';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
          <HeaderOption title="home" />
          <HeaderOption title="My Network" />
      </div>
    </div>
  )
}

export default Header
