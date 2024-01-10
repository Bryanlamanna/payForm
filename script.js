const rdPix = document.querySelector('.radio-pix');
const rdCard = document.querySelector('.radio-credit');
const cardForm = document.querySelector('.credit-box');
const pixForm = document.querySelector('.pix-box');
const btns = document.querySelectorAll('.btn');
const inputValue = document.querySelector('.input-value');
const total = document.querySelector('.total');
const combobox = document.querySelector('.select');
const selected = document.querySelector('.selected');
const menu = document.querySelector('.menu');
const optionList = document.querySelectorAll('.li');
const visa = 'assets/visa.png';
const mastercard = 'assets/master.png';
const card = 'assets/card.png';
const cardNum = document.querySelector('.input-card');
let menuvisible = false;

cardNum.addEventListener('input', () => {
    let card = cardNum.value;
    var cardString = card.toString();
    var fourOnes = cardString.substring(0, 4);
  
    if (fourOnes == '1234') {
        document.querySelector('.cardIMG').src = 'assets/master.png';    
        document.querySelector('.invalid-card').style.opacity = '0'; 
    } else if (fourOnes == '4321') {
        document.querySelector('.cardIMG').src = visa;
        document.querySelector('.invalid-card').style.opacity = '0';
    } else {
        document.querySelector('.invalid-card').style.opacity = '1';
    }
})




optionList.forEach((li) => {
    li.addEventListener('click', () => {
        combobox.style.width = '4em';
        menu.style.display = 'none';
        selected.textContent = li.textContent;
        menuvisible = !menuvisible;
    })
})

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

