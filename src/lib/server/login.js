import { users } from '.data.js';

export async function post(request) {
	const { username, password } = request.body;
	const user = users.find((user) => user.name === username && user.adminPassword === password);
	if (user && user.isAdmin) {
		return { body: { message: 'Inicio de sesión exitoso' } };
	} else {
		return { status: 401, body: { message: 'Nombre de usuario o contraseña incorrectos' } };
	}
}
