const submit = document.querySelector('.btn');
const email = document.getElementById('email');
const errorImg = document.querySelector('.error-img');
const error = document.querySelector('.error');
const form = document.querySelector('#form');
const input = document.querySelector('input');

form.addEventListener('submit', validate)
submit.addEventListener('click', validate)


function validate (e) {
    e.preventDefault()

    const inputValue = input.value.trim()

    if (!isEmail(inputValue)) {
        error.style.display = 'block';
        errorImg.style.display = 'block';
    }else {
        error.style.display = 'none';
        errorImg.style.display = 'none'; 
    }
}
function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
