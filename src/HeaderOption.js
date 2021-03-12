import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Headeroption.css';

function HeaderOption({avatar, title, Icon, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerIcon">
      {avatar && (
        <Avatar className="headerOption__icon">{user?.email[0].toUpperCase()}</Avatar>
      )}
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
