const rdPix = document.querySelector('.radio-pix');
const rdCard = document.querySelector('.radio-credit');
const cardForm = document.querySelector('.credit-box');
const pixForm = document.querySelector('.pix-box');
const btns = document.querySelectorAll('.btn');
const inputValue = document.querySelector('.input-value');


btns[0].addEventListener('click', () => {

    if (inputValue.value === '') {
        alert('Por favor, insira um valor!');
    }  else { 

    if (rdPix.checked) {
        cardForm.style.display = 'none';
        pixForm.style.display = 'block';
        btns[0].innerHTML = 'Mudar forma de pagamento'
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

