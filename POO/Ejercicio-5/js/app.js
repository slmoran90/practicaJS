class Person
{
	constructor(name, age, sex, weight, height, yearOfBirth)
	{
		this._name = name;
		this._age = age;
		this._dni = 0;
		this._sex = sex;
		this._weight = weight;
		this._height = height;
		this._yearOfBirth = yearOfBirth;
	}

	showGeneration()
	{
		if(this._yearOfBirth>=1994 && this._yearOfBirth<=2010)
		{
			console.group('Generación Z');
			console.log('Rasgo característico: Irreverencia');
			console.groupEnd();
		}
		else if(this._yearOfBirth>=1981 && this._yearOfBirth<=1993)
		{
			console.group('Generación Y (millennials)');
			console.log('Rasgo característico: Frustración');
			console.groupEnd();
		}
		else if(this._yearOfBirth>=1969 && this._yearOfBirth<=1980)
		{
			console.group('Generación X');
			console.log('Rasgo característico: Obsesión por el éxito');
			console.groupEnd();
		}
		else if(this._yearOfBirth>=1949 && this._yearOfBirth<=1968)
		{
			console.group('Generación Baby Boom');
			console.log('Rasgo característico: Amición');
			console.groupEnd();
		}
		else if(this._yearOfBirth>=1930 && this._yearOfBirth<=1948)
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
		* Año de nacimiento: ...
		* Sexo:...
		* Peso: ...
		* Altura: ...
		*/
		this.showGeneration();
		this.isOlder();
	}
}
