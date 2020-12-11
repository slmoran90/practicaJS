let firstNum = parseInt(prompt('Primer número: '));
let secondNum = parseInt(prompt('Segundo número: '));

if (firstNum == secondNum) document.write('Los números son iguales.');
else if (firstNum > secondNum) document.write('El mayor es: ' + firstNum);
else document.write('El mayor es: ' + secondNum);