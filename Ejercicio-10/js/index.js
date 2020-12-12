let userNum = parseInt(prompt('Número:'));

if (userNum % 2 == 0) document.write('El número es divisible por 2.');
else if (userNum % 3 == 0) document.write('El número es divisible por 3.');
else if (userNum % 5 == 0) document.write('El número es divisible por 5.');
else if (userNum % 7 == 0) document.write('El número es divisible por 7.');
else document.write('El número no es divisible por 2, 3, 5 o 7.');