class Person
{
	constructor(name, age, sex, weight, height)
	{
		this._name = name;
		this._age = age;
		this._dni = 0;
		this._sex = sex;
		this._weight = weight;
		this._height = height;
	}

	showGeneration()
	{
		if(this._age>=11 && this._age<=27)
		{
			console.group('Generación Z');
			console.log('Rasgo característico: Irreverencia');
			console.groupEnd();
		}
		else if(this._age>=28 && this._age<=40)
		{
			console.group('Generación Y (millennials)');
			console.log('Rasgo característico: Frustración');
			console.groupEnd();
		}
		else if(this._age>=41 && this._age<=52)
		{
			console.group('Generación X');
			console.log('Rasgo característico: Obsesión por el éxito');
			console.groupEnd();
		}
		else if(this._age>=53 && this._age<=72)
		{
			console.group('Generación Baby Boom');
			console.log('Rasgo característico: Amición');
			console.groupEnd();
		}
		else if(this._age>=73 && this._age<=91)
		{
			console.group('Generación Silent Generation (Los niños de la posguerra)');
			console.log('Rasgo característico: Austeridad');
			console.groupEnd();
		}
	}

	isOlder()
	{
		if(this._age >= 18) console.log('Mayor de edad.');
		else console.log('Menor de edad');
	}

	dniRand()
	{
		let dniRandom = Math.floor(Math.random() * 10000000 );
		this.setDni = dniRandom;
	}

	set setDni(dni)
	{
		this._dni = dni;
	}

	showData()
	{
		console.log('Datos:');
		/*
		* Nombre: ...
		* Edad: ...
		* DNI: ...
		* Sexo:...
		* Peso: ...
		* Altura: ...
		*/
		this.showGeneration();
		this.isOlder();
	}
}
