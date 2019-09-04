import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Logo from '../Logo/Logo';

import './HomeButton.css';
// eslint-disable-next-line react/jsx-props-no-spreading
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const HomeButton = () => (
  <Button className="home-button" color="secondary" component={AdapterLink} to="/home">
    <Logo />
    Home
  </Button>
);

export default HomeButton;
