import { Avatar } from '@material-ui/core';
import React from 'react';
import './Headeroption.css';

function HeaderOption({title, Icon, avatar, onClick}) {

  return (
    <div onClick={onClick} className="headerIcon">
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar}/>
      )}
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
