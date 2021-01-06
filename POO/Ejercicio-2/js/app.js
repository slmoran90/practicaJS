class Account
{
	constructor(accHolder, balance)
	{
		this.accHolder = accHolder;
		this.balance = balance;
	}

	
	addBalance(value)
	{
		this.add = value;
	}

	extractBalance(value)
	{
		if(this.balance < value) console.log('Saldo insuficiente.');
		else
		{
			this.extract = value;
			console.log(`Se retiro: $${value}`);
		}
	}

	informar()
	{
		console.group('Estado de la cuenta:');
		console.log(`Titular: ${this.accHolder}`);
		console.log(`Saldo disponible: ${this.info}`);
		console.groupEnd();
	}

	set add(value)
	{
		this.balance += value;
	}

	set extract(value)
	{
		this.balance -= value;
	}

	get info()
	{
		return this.balance;
	}
}

let acc = new Account('Alex', 0);
