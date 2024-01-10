const rdPix = document.querySelector('.radio-pix');
const rdCard = document.querySelector('.radio-credit');
const cardForm = document.querySelector('.credit-box');
const pixForm = document.querySelector('.pix-box');
const btns = document.querySelectorAll('.btn');
const inputValue = document.querySelector('.input-value');
const total = document.querySelector('.total');
const combobox = document.querySelector('.select');
const menu = document.querySelector('.menu');
let menuvisible = false;


combobox.addEventListener('click', () => {

    if (menuvisible) {
        menu.style.display = 'none';
        
    } else {
        menu.style.display = 'block';
    }

    menuvisible = !menuvisible;

})

btns[0].addEventListener('click', () => {

    if (inputValue.value === '') {
        alert('Por favor, insira um valor!');
    }  else { 
    if (rdPix.checked) {
        cardForm.style.display = 'none';
        pixForm.style.display = 'block';
        btns[0].innerHTML = 'Mudar forma de pagamento'
        calcPix();
    } else if (rdCard.checked) {
        pixForm.style.display = 'none';
        cardForm.style.display = 'block';
        btns[0].innerHTML = 'Mudar forma de pagamento'
    }

}
})

rdPix.addEventListener('click', () => {
    rdCard.checked = false;
})

rdCard.addEventListener('click', () => {
    rdPix.checked = false;
})

function calcPix() {
    let value = document.querySelector('.input-value').value;
    let result = value * 0.9;
    total.innerHTML = `Total: R$ ${result}`;
} 

