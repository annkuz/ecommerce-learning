import React from 'react';
import MenuItem from './MenuItem/MenuItem';

import './DirectoryMenu.styles.scss'

const DirectoryMenu = () => {
  return ( 
    <div className='directoryMenu'>
      <MenuItem title='HATS' subtitle='SHOP NOW' />
      <MenuItem title='JACKETS' subtitle='SHOP NOW' />
      <MenuItem title='SNEAKERS' subtitle='SHOP NOW' />
      <MenuItem title='WOMENS' subtitle='SHOP NOW' />
      <MenuItem title='MENS' subtitle='SHOP NOW' />
    </div>
  );
}
 
export default DirectoryMenu;