import './style.scss';
import './img/favicon.png'

function component() {
  let element = document.createElement('p');
  element.innerHTML = 'Dynamically created element';
  element.classList.add('marked');

  return element;
}

document.body.appendChild(component());
