export let users = [
	{
		type: 'admin',
		name: 'Admin',
		pin: '123',
		password: '123',
		canAddPlayers: true
	},
	{
		type: 'player',
		name: 'Player1'
	},
	{
		type: 'admin',
		name: 'Admin2',
		pin: '5678',
		password: 'password2',
		canAddPlayers: true
	},
	{
		type: 'player',
		name: 'Player2'
	}
	// Agrega más usuarios según sea necesario...
];
function addPlayer(name) {
	// Crea un nuevo objeto de jugador
	const newPlayer = {
		type: 'player',
		name: name
	};

	// Agrega el nuevo jugador al arreglo de usuarios
	users.push(newPlayer);

	console.log('Adplayer');
	// Devuelve el nuevo jugador
	return newPlayer;
}
export function getAllUsers() {
	console.log('getalluser');
	return users;
}

export function adminLogin(name, password) {
	const user = users.find((user) => user.name === name);

	if (!user) {
		throw new Error('Usuario no encontrado' + JSON.stringify(name));
	}

	if (user.type !== 'admin') {
		throw new Error('El usuario no es un administrador');
	}

	if (user.password !== password) {
		throw new Error('Contraseña incorrecta');
	}
	console.log('Adminlogin funciona ');
	return true;
}

export function validateAdminPin(pin) {
	// Busca al administrador con el PIN proporcionado en el arreglo de usuarios
	const user = users.find((user) => user.type === 'admin' && user.pin === pin);

	// Si no se encontró al administrador, devuelve null
	if (!user) {
		return null;
	}
	console.log('validateAmdin pin');
	// Devuelve el objeto del usuario
	return user;
}
export function playerLogin(adminPin, player) {
	// Valida el PIN del administrador
	const user = validateAdminPin(adminPin);
	if (!user) {
		throw new Error('PIN de administrador inválido');
	}

	// Verifica si el administrador puede agregar jugadores
	if (!user.canAddPlayers) {
		throw new Error('Este administrador no puede agregar jugadores');
	}

	// Agrega el jugador a la base de datos
	// addPlayer(player);

	console.log('playerLogin funciona');
	return addPlayer(player);
}

export function getAllPlayers() {
	// Filtra el arreglo para obtener solo los objetos de tipo "jugador"
	const playerObjects = users.filter((player) => player.type === 'player');
	console.log('getAllPlayer  funciona' + playerObjects);

	// Devuelve los objetos de tipo "jugador"
	return playerObjects;
}
