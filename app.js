let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let address = document.getElementById('address');

    name.value = '';
    email.value = '';
    password.value = '';
    address.value = '';
})

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let address = document.getElementById('address');

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    password = password.value;
    localStorage.setItem('password', password);

    address = address.value;
    localStorage.setItem('address', address);
    
})