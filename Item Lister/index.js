var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);



function addItem(e) {
    e.preventDefault();


    var newItem = document.getElementById('item');

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));


    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}