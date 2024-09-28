const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const num3 = document.getElementById('numero3');

const boton = document.querySelector('#verificar')
const resultado = document.getElementById('resultado1')


boton.addEventListener('click', function() {
    
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const valor3 = parseInt(num3.value);


    const sumanumero = valor1 + valor2 + valor3;

  
    if (sumanumero > 10) {
        resultado.innerHTML = '"Llevas demasiados stickers';
    } else {
        resultado.innerHTML = 'LLevas '+sumanumero+' Sticker';
    }
});
