import '../style/index.scss';
import printMe from './print.js';

console.log('*** *** *** *** ***');
console.log('Site run in %s mode!',
  process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'UNKNOWN');
console.log('*** *** *** *** ***');

function component() {
  let element = document.createElement('p');
  element.innerHTML = 'Dynamically created element';
  element.classList.add('marked');
  element.onclick = printMe;

  return element;
}

document.body.appendChild(component());
