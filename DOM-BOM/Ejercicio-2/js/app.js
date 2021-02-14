// import * from 'generation';

const form = document.getElementById('form'),
	name = document.getElementById('inputName'),
	aye = document.getElementById('inputAge'),
	dni = document.getElementById('inputDNI'),
	userHeight = document.getElementById('inputHeight'),
	userWeight = document.getElementById('inputWeight'),
	userSex =  form.radioSex,
	btnSubmit = document.getElementById('btnSubmit');


btnSubmit.addEventListener('submit', (e)=>{
	const yearOfBirth = document.getElementById('inputDate').value;
	console.log(yearOfBirth);
});
