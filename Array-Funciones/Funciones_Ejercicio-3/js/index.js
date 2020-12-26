let ladoX = parseFloat(prompt('Lado en x:'));
let ladoY = parseFloat(prompt('Lado en Y:'));
let per = 0;

let rectanglePerimeter = (a, b) =>
{
	let p = 2*(a + b);
	return p.toFixed(2);
}

per = rectanglePerimeter(ladoX, ladoY);
document.write(`Perimetro del rectangulo: ${per} m²`);

