let firstNumb = parseInt(prompt('Primer número: '));
let secondNumb = parseInt(prompt('Segundo número: '));
let thirdNumb = parseInt(prompt('Tercer número: '));

if ((firstNumb  == secondNumb) && (firstNumb == thirdNumb)) document.write('Los tres números son iguales.');
else if ((firstNumb > secondNumb) && (firstNumb > thirdNumb)) document.write('El número más grande es: ' + firstNumb);
else if ((secondNumb > firstNumb) && (secondNumb > thirdNumb)) document.write('El número más grande es: ' + secondNumb);
else document.write('El número más grande es: ' + thirdNumb);
