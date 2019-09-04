// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

import './ListItemLink.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const ListItemLink = (props: any) => <ListItem className="list-item-link" button color="secondary" component={Link} {...props} />;

export default (ListItemLink);
