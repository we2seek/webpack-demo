function component() {
  let element = document.createElement('p');
  element.innerHTML = 'Dynamically created element';

console.log(element);
  return element;
}

document.body.appendChild(component());
console.log('script finished...');
