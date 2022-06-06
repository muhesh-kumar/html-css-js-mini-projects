const input = document.querySelector('input').textContent;
const sumbit = document.querySelector('button');
const ul = document.querySelector('ul');


// eventlistener

sumbit.addEventListener('click', execute);

function execute(){

    const li = document.createElement('li');
    const text = document.createTextNode(input);
    li.appendChild(text);
    ul.appendChild(li);

}

