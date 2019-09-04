// @flow
import React from 'react';

import SectionText from './SectionText';
import SectionTitle from './SectionTitle';
import SectionDivider from './SectionDivider';
import SectionList from './SectionList';
import SectionCode from './SectionCode';

import './Section.css';

type SectionProps = {
  children: any;
}

const Section = ({ children }: SectionProps) => <section className="section">{children}</section>;

Section.text = SectionText;
Section.title = SectionTitle;
Section.divider = SectionDivider;
Section.list = SectionList;
Section.code = SectionCode;

export default Section;
