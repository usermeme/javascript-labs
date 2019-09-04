// @flow
import React, { memo } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { SideList } from '../../components';

type MenuDrawerProps = {
  open: boolean,
  toggleDrawer: any,
};

const MenuDrawer = ({ open, toggleDrawer }: MenuDrawerProps) => {
  const isBrowser = typeof window !== 'undefined';
  const iOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="top"
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      disableSwipeToOpen
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <SideList closeMenu={toggleDrawer(false)} />
    </SwipeableDrawer>
  );
};

export default memo<MenuDrawerProps>(MenuDrawer);
