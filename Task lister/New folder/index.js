// variables 
const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const btn = document.querySelector('.btn');
const ol = document.querySelector('#orderedList');

//adding event listeners:

form.addEventListener('submit', display);

// display function:

function display(e) {

    //creating a list item
    const li = document.createElement('li');

    //creating a text node and append it to the list item
    li.appendChild(document.createTextNode(name.value));

    //append the list item to the ordered list:
    ol.appendChild(li);

    //clear the input value to add new values in the future.
    name.value = '';

    e.preventDefault();

}