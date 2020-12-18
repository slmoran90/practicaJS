/*
*	Math.random() devuelve un valor aleatorio entre 0 y 1
*	Math.round() redondea un número para arriba, ej: 0.65 = 1.
*	el metodo random me devuelve valores decimales, al multiplicarlo por 100 logro conseguir un entero
*	y luego redondearlo para mostrar el numero "limpio".
* 	EJ: random me tira 0.35684
*	0.3568 * 100 = 35.684
*	35.684 redondeado para arriba es 36.
*/

for(let i=0; i<99; i++)
{
	document.write(`${Math.round(Math.random(i)*100)} <br>`)
}
