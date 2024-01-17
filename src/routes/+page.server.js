import * as db from '$lib/server/data.js';

export function load({ cookies }) {
	let user = cookies.get('name');

	return {
		todos: db.getAllUsers(user)
	};
}

export const actions = {
	login: async ({ request }) => {
		console.log('Entro en el login');
		const data = await request.formData();

		const loginResult = db.adminLogin(data.get('name'), data.get('password'));
		console.log(db.adminLogin(data.get('name'), data.get('password')));
		if (loginResult) {
			console.log('Entro aqui servidor +page.server.js');
			return {
				status: '302',
				redirect: '/teacher'
			};
		} else {
			return { status: 401, body: 'Inicio de sesión fallido servidor ' };
		}
	},

    loginPlayer: async ({ request }) => {
		console.log('Entro en el login player');
		const data = await request.formData();

		const loginResult = db.playerLogin(data.get('pin'), data.get('name'));
		console.log(db.playerLogin(data.get('pin'), data.get('name')));
		if (loginResult) {
			console.log('Entro aqui servidor +page.server.js login player  ');
			return {
				status: '302',
				redirect: '/player',
				body: JSON.stringify(loginResult.name)
			};
		} else {
			return { status: 401, body: 'Inicio de sesión fallido servidor  player ' };
		}
	}
};
