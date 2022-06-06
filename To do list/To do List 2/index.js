 game = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg')
 const userList = document.querySelector('#users');

 game.addEventListener('submit', onSubmit);

 function onSubmit(e) {
     e.preventDefault();

     console.log(nameInput.value);
 }