import React from 'react';
import { configure, addDecorator } from '@storybook/react';


import { GlobalStyle } from '../src/shared/global';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js|mdx
configure(
  [
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);