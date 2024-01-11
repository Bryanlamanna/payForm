const rdPix = document.querySelector('.radio-pix');
const rdCard = document.querySelector('.radio-credit');
const cardForm = document.querySelector('.credit-box');
const pixForm = document.querySelector('.pix-box');
const btns = document.querySelectorAll('.btn');
const inputValue = document.querySelector('.input-value');
const total = document.querySelectorAll('.total');
const combobox = document.querySelector('.select');
const selected = document.querySelector('.selected');
const menu = document.querySelector('.menu');
const optionList = document.querySelectorAll('.li');
const cardNum = document.querySelector('.input-card');
const vezes = document.querySelectorAll('.vezes');
let menuvisible = false;

cardNum.addEventListener('input', () => {
    let card = cardNum.value;
    var cardString = card.toString();
    var fourOnes = cardString.substring(0, 4);
  
    if (cardString.length < 4) {
        document.querySelector('.cardIMG').src = 'assets/card.png';
        document.querySelector('.invalid-card').style.opacity = '0';
        return;
    } else {
        if (fourOnes == '1234') {
            document.querySelector('.cardIMG').src = 'assets/master.png';    
            document.querySelector('.invalid-card').style.opacity = '0'; 
        } else if (fourOnes == '4321') {
            document.querySelector('.cardIMG').src = 'assets/visa.png';
            document.querySelector('.invalid-card').style.opacity = '0';
        } else {
            document.querySelector('.invalid-card').style.opacity = '1';
            document.querySelector('.cardIMG').src = 'assets/card.png';
        }
   }
})

optionList.forEach((li) => {
    li.addEventListener('click', () => {
        combobox.style.width = '4em';
        menu.style.display = 'none';
        selected.textContent = li.textContent;
        menu.style.width = '4em';
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
        calcCard();
    }

}
})

btns[2].addEventListener('click', () => {
    alert('Pagamento PIX efetuado com sucesso!');
})

btns[1].addEventListener('click', () => {
        let parcs = selected.innerHTML;
        
        if (parcs == '4x') {
            let result4x = (Number(inputValue.value) * 1.05).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            total[0].innerHTML = `Total: R$ ${result4x}`;
        } else if (parcs == '5x') {
            let result5x = (Number(inputValue.value) * 1.10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            total[0].innerHTML = `Total: R$ ${result5x}`;
        } else {
            let result123x = (Number(inputValue.value)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            total[0].innerHTML =  `Total: R$ ${result123x}`;
        }
     
})

rdPix.addEventListener('click', () => {
    rdCard.checked = false;
})

rdCard.addEventListener('click', () => {
    rdPix.checked = false;
})

function calcPix() {
  let value = inputValue.value;
  const result = value * 0.9;
  
  total[1].innerHTML = `Total: R$ ${result}`;
}

function calcCard() {
    let value = document.querySelector('.input-value').value;
    let result123x = (Number(value)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    let result4x = (Number(value) * 1.05).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let result5x = (Number(value) * 1.10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    vezes[0].innerHTML = `1x ${result123x}`;
    vezes[1].innerHTML = `2x ${result123x}`;
    vezes[2].innerHTML = `3x ${result123x}`;
    vezes[3].innerHTML = `4x ${result4x}`;
    vezes[4].innerHTML = `5x ${result5x}`;
}

