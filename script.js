const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

// min 10   +  special + uppercase
//function
const checkPassword = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.innerHTML = 'Masz dobre hasło.';
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'Masz średnie hasło.';
        p.style.color = 'gold';
    } else {
        p.innerHTML = 'Masz słabe hasło';
        p.style.color = 'red';
    }
};
//listeners

pass.addEventListener('keyup', function () { // keyup (po puszczeniu klawisza zaczyna działać)
    if (pass.value !== '') {
        checkPassword();
    } else {
        p.innerHTML = 'Nie podałeś hasła...';
        p.style.color = '';
    };
});
