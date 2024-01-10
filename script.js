const rdPix = document.querySelector('.radio-pix');
const rdCard = document.querySelector('.radio-credit');
const cardForm = document.querySelector('.credit-box');
const pixForm = document.querySelector('.pix-box');
const btns = document.querySelectorAll('.btn');

btns[0].addEventListener('click', () => {
    if (rdPix.checked) {
        cardForm.style.display = 'none';
        pixForm.style.display = 'block';
    } else if (rdCard.checked) {
        pixForm.style.display = 'none';
        cardForm.style.display = 'block';
    }
})

rdPix.addEventListener('click', () => {
    rdCard.checked = false;

})

rdCard.addEventListener('click', () => {
    rdPix.checked = false;

})

