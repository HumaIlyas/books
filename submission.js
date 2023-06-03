// contact page
let field = document.querySelector('textarea');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let backUp = field.getAttribute('placeholder');
let submit = document.querySelector('#submit');

submit.onclick = function(event){
    event.preventDefault();
    document.querySelector("#popup-message").innerHTML = 'Thanks for your message, We will contact you shortly';
    // reset the form 
    resetForm();
}

let resetForm = () => {

    setTimeout(() => {
        field.value = '';
        fname.value = '';
        lname.value = '';
        email.value = '';
        document.querySelector("#popup-message").innerHTML = "";
    }, 2500); 
}