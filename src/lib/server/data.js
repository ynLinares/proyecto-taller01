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

// Función para agregar un nuevo jugador
function addPlayer(name) {
	// Crea un nuevo objeto de jugador
	const newPlayer = {
		type: 'player',
		name: name
	};

	// Agrega el nuevo jugador al arreglo de usuarios
	users.push(newPlayer);

	// Devuelve el nuevo jugador
	return newPlayer;
}

// Función para obtener todos los usuarios
export function getAllUsers() {
	return users;
}

// Función para el inicio de sesión del administrador
export function adminLogin(name, password) {
	// Busca al usuario con el nombre proporcionado
	const user = users.find((user) => user.name === name);

	// Si el usuario no existe, devuelve false
	if (!user) {
		return false;
	}

	// Si el usuario no es un administrador, devuelve false
	if (user.type !== 'admin') {
		return false;
	}

	// Si la contraseña es incorrecta, devuelve false
	if (user.password !== password) {
		return false;
	}

	// Si todo es correcto, devuelve true
	return true;
}

// Función para validar el PIN del administrador
export function validateAdminPin(pin) {
	// Busca al administrador con el PIN proporcionado
	const user = users.find((user) => user.type === 'admin' && user.pin === pin);

	// Si no se encontró al administrador, devuelve null
	if (!user) {
		return null;
	}

	// Devuelve el objeto del usuario
	return user;
}

// Función para el inicio de sesión del jugador
export function playerLogin(adminPin, player) {
	// Valida el PIN del administrador
	const user = validateAdminPin(adminPin);

	// Si el PIN del administrador es inválido, lanza un error
	if (!user) {
		throw new Error('PIN de administrador inválido');
	}

	// Si el administrador no puede agregar jugadores, lanza un error
	if (!user.canAddPlayers) {
		throw new Error('Este administrador no puede agregar jugadores');
	}

	// Agrega el jugador a la base de datos
	return addPlayer(player);
}

// Función para obtener todos los jugadores
export function getAllPlayers() {
	// Filtra el arreglo para obtener solo los objetos de tipo "jugador"
	const playerObjects = users.filter((player) => player.type === 'player');

	// Devuelve los objetos de tipo "jugador"
	return playerObjects;
}

// Función para obtener el PIN de un administrador
export function getPin(admin){
	// Busca al administrador con el nombre proporcionado
	const user = users.find((user) => user.name === admin);

	// Devuelve el PIN del administrador
	return user.pin;
}