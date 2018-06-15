import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Blog from '~/components/Blog';

document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = <Blog />;
  const targetNode = document.getElementById('root');
  render(rootComponent, targetNode);
});
