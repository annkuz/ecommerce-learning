import React from 'react';
import './MenuItem.styles.scss'

const MenuItem = ({title, subtitle}) => {
  return ( 
    <div className="menuItem">
      <div className='content'>
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
   );
}
 
export default MenuItem;