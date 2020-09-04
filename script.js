// 3. Desenvolva um programa que receba uma String e retorne somente os seus números na ordem inversa.
// Se possível, criar dois códigos: com e sem uso de expressões regulares; Por exemplo: Para a entrada:
// ‘CEP: 67013 - 000’ A saída deve ser: ‘00031076



function ordemInversa() {

  var texto = document.querySelector('#conversor').value;

  this.numerosInvertidos(texto)
}


function numerosInvertidos(texto) {

  texto = texto.toString();

  var soNumero = texto.replace(/\D/g, ''); //replace : substituir
  var soNumeroAoContrario = soNumero.split('').reverse().join('');

  this.enviarHTML(soNumeroAoContrario)
}

function enviarHTML(valor) {

  document.getElementById("retornaNumerosInvertidos").innerHTML = 'Números na ordem inversa: ' + valor;

}