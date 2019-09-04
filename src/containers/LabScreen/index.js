// @flow
import React from 'react';

import ErrorPage from '../ErrorPage/ErrorPage';

import * as Labs from '../../labs';

type LabScreenType = {
  match: any;
}

const LabScreen = ({ match }: LabScreenType) => {
  const { labName } = match.params;
  const Lab = Labs[labName] || ErrorPage;
  return <Lab labs={Labs} />;
};

export default LabScreen;
