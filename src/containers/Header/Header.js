import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from '../MenuDrawer/MenuDrawer';
import { HomeButton } from '../../components';

import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(value);
  };

  return (
    <header className="wrap">
      <MenuDrawer open={open} toggleDrawer={toggleDrawer} />
      <div className="container">
        <IconButton className="menu-burger custom-button" color="secondary" onClick={toggleDrawer(!open)}>
          <MenuIcon />
        </IconButton>
        <HomeButton />
        {/* <MenuBar menuItems={menuItems} /> */}
      </div>
    </header>
  );
};

export default Header;
