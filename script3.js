const botonvalidar = document.querySelector('#btnValidar');
const parrafo = document.getElementById('resultado');
const select1 = document.getElementById('RuedaNumero1');
const select2 = document.getElementById('RuedaNumero2');
const select3 = document.getElementById('RuedaNumero3');

botonvalidar.addEventListener('click', function() {
  
    const valor1 = select1.value; 
    const valor2 = select2.value; 
    const valor3 = select3.value; 
    
   
    const totalRueda = valor1 + valor2 + valor3; 

    const claveVaida = '714';
    const claveVaida2 = '911';

   
    if (totalRueda === claveVaida || totalRueda === claveVaida2) {
        parrafo.innerHTML = 'Clave correcta';
    } else {
        parrafo.innerHTML = 'Clave incorrecta';
    }
});
