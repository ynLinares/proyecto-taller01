import * as db from '$lib/server/data.js';

export function load({ cookies }) {
	let user = cookies.get('name');

	return {
		todos: db.getAllUsers(user)
	};
}

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const loginResult = db.adminLogin(data.get('name'), data.get('password'));
		console.log('Entro aqui ');
		if (loginResult) {
			return { status: 200, body: { success: true } };
		} else {
			return { status: 401, body: 'Inicio de sesión fallido' };
		}
	}
};
