class Contact
{
	constructor(name, number)
	{
		this._name = name;
		this._number = number;
	}

	get getName()
	{
		return this._name;
	}

	set setName(name)
	{
		this._name = name;
	}

	get getNumber()
	{
		return this._number;
	}

	set setNumber(number)
	{
		this._number = number;
	}

}

class Phonebook extends Contact
{
	constructor(name, number)
	{
		super(name, number);
		this._arr = []; 
	}

	addContact(contact)
	{
		let array = this._arr;

		if(array.length == 0) array.push(contact);
		else if(array.length < 10)
		{
			for(let i=0; i<array.length; i++)
			{
				if(this.existsConctact(contact.getName)) console.log(`el contacto ${contact.getName} ya existe`);
				else
				{
					array.push(contact);
					break;
				}
			}
		}

		if(this.fullBook()) console.log('Agenda completa.');
	}

	existsConctact(name)
	{
		let array = this._arr;
		for(let i=0; i<array.length; i++)
		{
			if(array[i].getName === name) return true;
			else return false;
		}
	}

	listContacts()
	{
		let array = this._arr;

		for(let i=0; i<array.length; i++)
		{
			console.group('Contacto:');
			console.log(`Nombre: ${array[i].getName}`);
			console.log(`Número: ${array[i].getNumber}`);
			console.groupEnd();
		}
	}


	findContact(name)
	{
		let array = this._arr;

		for(let i=0; i<array.length; i++)
		{
			if(array[i].getName === name) return array[i].getNumber;
			else return null;
		}
	}

	remove(name)
	{
		let array = this._arr;
		let index = array.indexOf(name);

		if(index !== -1)
		{
			array.splice(index, 1);
			return true;
		}
		else return false;
	}

	fullBook()
	{
		let array = this._arr;

		if (array.length >= 10) return true;
		else return false;
	}


}

const menu = () =>
{
	let opc = 0;


}

let contact = new Contact('Sergio', 1324);
let contact2 = new Contact('Sergiio', 4213268);
let phonebook = new Phonebook();

phonebook.addContact(contact);
phonebook.addContact(contact2);
phonebook.listContacts();


