export let users = [
	{
		type: 'admin',
		name: 'Admin',
		pin: '1234',
		password: '123'
	},
	{
		type: 'player',
		name: 'Player1'
	},
	{
		type: 'admin',
		name: 'Admin2',
		pin: '5678',
		password: 'password2'
	},
	{
		type: 'player',
		name: 'Player2'
	}
	// Agrega más usuarios según sea necesario...
];
export function getAllUsers() {
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
	console.log('data.js funciona ');
	return true;
}
