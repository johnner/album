/* eslint-disable semi */
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Album Viewer';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
