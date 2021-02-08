const randNum = () =>
{
	let rand = Math.floor((Math.random()*50)+1);
	return rand;
}

const changeTags = () =>
{
	sectionStart.classList.remove('d-flex');
	sectionStart.classList.add('d-none');

	sectionGame.classList.remove('d-none');
	sectionGame.classList.add('d-flex');
}

const validNum = (e) =>
{
	e.preventDefault();

	const input = document.getElementById('inpChild').value,
		title = document.createElement('h3'),
		small = document.createElement('small');

	form.appendChild(small);
	small.className = 'd-none';
	small.innerHTML = 'Ingresar solo números.';


	if(isNaN(input) || input.length == 0)
	{
		small.className = 'text-danger mt-2';
		btnSubmit.addEventListener('click', function(){
			small.className = 'd-none';
		});
	}
	else
	{
		if(input == rand)
		{
			sectionGame.removeChild(form);
			sectionGame.appendChild(title);

			title.className = 'text-warning font-weight-bold';

			title.innerHTML = 'FELICIDADES, ACERTASTE';
		}
		else if(input > rand) alert('El número mágico es más chico.');
		else alert('El número mágico es más grande.');

	}

	form.reset();
}


const sectionStart = document.getElementById('sectionStart'),
	btnStart = document.getElementById('btnStart'),
	sectionGame = document.getElementById('sectionGame'),
	form = document.getElementById('form'),
	btnSubmit = document.getElementById('btnSubmit');

let rand = randNum();
	console.log(rand);

btnStart.addEventListener('click', changeTags);

btnSubmit.addEventListener('click', validNum);




