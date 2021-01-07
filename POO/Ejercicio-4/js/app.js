class Product
{
	constructor(code, name, price)
	{
		this._code = code;
		this._name = name;
		this._price = price;
	}

	printData(pos)
	{
		console.group(`Producto ${pos}:`);
		console.log(`Codigo: ${this._code}`);
		console.log(`Nombre: ${this._name}`);
		console.log(`Precio: $${this._price}`);
		console.groupEnd();
	}
}

let array = [];
let objOne = new Product(1, 'Smartphone', 42000);
let objTwo = new Product(2, 'Smart-TV', 183000);
let objThree = new Product(3, 'Notebook', 135000);

array = [objOne, objTwo, objThree];

for (let i=0; i<array.length; i++)
{
	array[i].printData(i+1);
}
