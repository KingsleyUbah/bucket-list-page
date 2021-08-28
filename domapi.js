/* EXAMINING THE DOCUMENT OBJECT */
// console.dir(document);
// console.log(document.URL);
// console.log(document.lastModified);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.all);


/* ACCESS ELEMENTS FROM THE DOM */
// console.log(document.getElementById('items'));
// console.log(document.getElementsByClassName('list-group-item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByName('li'));

/* QUERY FOR ELEMENTS WITH CSS SELECTORS */
// console.log(document.querySelector('.list-group-item'))
// console.log(document.querySelector('#header-title'))
// console.log(document.querySelectorAll('.list-group-item'))

/* WORKING WITH TEXTS */
/* let firstItem = document.querySelector('.list-group-item').textContent;
console.log(firstItem); */
//console.log(document.querySelector('.list-group-item').textContent = "Ride on a Camel instead, sorry Horse!");

/* let formTitle = document.querySelector('.title').innerHTML = '<h1>Stop adding any more items!</h1>';
console.log(formTitle); */

/* WORKING WITH STYLES */
/* let firstItem = document.querySelector('.list-group-item');
let boldItem = firstItem.style.backgroundColor = 'red'; */

/* TRAVERSING THE DOM */
/* let items = document.querySelector('#items');
console.log(items.parentElement); */

/* let items = document.querySelector('#items');
console.log(items.children); */

/* let items = document.querySelector('#items');
console.log(items.firstElementChild); */

/* let items = document.querySelector('#items');
console.log(items.lastElementChild); */

/* let form = document.querySelector('.form-inline');
console.log(form.nextElementSibling); */

/* let title = document.querySelector('.title');
console.log(title.previousElementSibling); */


/* ADDING ELEMENTS AND ATTRIBUTES TO THE DOM */

// Create a new element (h2) and append text inside it
let newH2 = document.createElement('h2');
let warning = document.createTextNode('Must not exceed five items!')

// add text to h2
newH2.appendChild(warning);

// setting a class on it
newH2.className = 'warning-btn'

// setting an attribute on it
newH2.setAttribute('title', 'warning text')

console.log(newH2);

// Inserting into the DOM
let cardBody = document.querySelector('.card');
let list = document.querySelector('#items');

cardBody.insertBefore(newH2, list);
