import { Avatar } from '@material-ui/core';
import React from 'react';
import './Headeroption.css';

function HeaderOption({title, Icon, avatar}) {
  return (
    <div className="headerIcon">
      {avatar && (
        <Avatar className="headerOption__ico" src={avatar}/>
      )}
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
