const msg = 'Encender el auto?';
let auto =
{
	color: '',
	marca: '',
	modelo: '',
	estado: false
}
let key = Object.keys(auto);
let state;

let isOn = ()=>
{
	let state = false;
	if(confirm(msg)) return state = true;
	else return state;
}

auto.marca = prompt('Marca:');
auto.modelo = prompt('Modelo:');
auto.color = prompt('Color:');

state = isOn();

if(state) auto.estado = 'Encendido';
else auto.estado = 'Apagado';

for(let i=0; i<key.length; i++)
{
	document.write(`${key[i]}: ${auto[key[i]]}<br>`);
}