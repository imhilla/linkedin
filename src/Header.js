import React from 'react';
import './Header.css';
import { BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount } from '@material-ui/icons';
import HeaderOption from './HeaderOption';
import Laser from '../src/images/laser.jpg'

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
        <HeaderOption Icon={Home} title="home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={Laser} title="Me" />
      </div>
    </div>
  )
}

export default Header
