let userAge = parseInt(prompt('Edad:'));

// Si el rango de edad es entre 1-17 u 80-99, no puede conducir .
if ((userAge>=1 && userAge<18) || (userAge>80 && userAge<100)) document.write('No puede conducir.');
// Si el rango de edad es entre 18-80, puede conducir.
else if ((userAge>=18 && userAge<=80)) document.write('Puede conducir.');
// Cualquier dato fuera de esos rangos es invalido.
else document.write('Dato invalido.');