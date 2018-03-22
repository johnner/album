import _ from 'lodash';
import '../styles/main.scss';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  return element;
}

document.body.appendChild(component());