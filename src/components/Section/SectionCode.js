// @flow
import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type SectionCodeType = {
  children: string,
  language: string
}

const SectionCode = ({ children, language }: SectionCodeType) => (
  <SyntaxHighlighter language={language} style={docco}>
    {children}
  </SyntaxHighlighter>
);

export default SectionCode;
