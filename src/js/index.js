import '../style/index.scss';
// import './img/favicon.png'

import printMe from './print.js';

//require('./src/index.html');

function component() {
  let element = document.createElement('p');
  element.innerHTML = 'Dynamically created element';
  element.classList.add('marked');
  element.onclick = printMe;

  return element;
}

document.body.appendChild(component());
