// @flow
import React, { memo } from 'react';

type SectionListProps = {
  children: string[]
}

const SectionList = ({ children }: SectionListProps) => (
  <ul className="section__list">
    {children.map((item) => <li>{item}</li>)}
  </ul>
);

export default memo<SectionListProps>(SectionList);
