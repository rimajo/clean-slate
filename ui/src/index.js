import React from 'react';
import { render } from 'react-dom';
import MyComponents from './components/MyComponent';
import './../style/general.scss'

render(
  <MyComponents />,
  document.getElementById('root')
);