// @flow
import React, { memo } from 'react';
import MenuBarItem from '../MenuBarItem/MenuBarItem';
import './MenuBar.css';

import Logo from '../Logo/Logo';

type MenuBarProps = {
  menuItems: string[],
}

const MenuBar = ({ menuItems }: MenuBarProps) => (
  <nav className="menu-bar">
    <Logo />
    <div className="menu-bar__items">
      {menuItems.map((text) => <MenuBarItem text={text} key={text} />)}
    </div>
  </nav>
);

export default memo<MenuBarProps>(MenuBar);
