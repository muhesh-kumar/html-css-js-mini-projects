const mainForm = document.getElementById('myform');
const personName = document.getElementById('names');
const personEmail = document.getElementById('emails');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const itemList = document.getElementById('itemList');

mainForm.addEventListener('submit', Submit);

function Submit(e){
    e.preventDefault();

    if(personName.value == '' || personEmail.value ==''){

        nameError.innerHTML = 'Please enter your name';
        emailError.innerHTML = 'Please enter your email';

    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${personName.value} : ${personEmail.value}`));
        itemList.appendChild(li);

        personName.value = '';
        personEmail.value = '';
    }

}
