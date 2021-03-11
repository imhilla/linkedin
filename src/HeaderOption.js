import React from 'react';
import './Headeroption.css';

function HeaderOption({title, Icon}) {
  return (
    <div>
      {Icon && <Icon className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
