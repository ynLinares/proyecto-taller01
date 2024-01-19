import * as db from '$lib/server/data.js';

export const actions = {
	login: async ({ request }) => {
		console.log('Entro en el login admin');
		const data = await request.formData();
		const loginResult = db.adminLogin(data.get('name'), data.get('password'));
		console.log(loginResult);
		if (loginResult) {
			console.log('Entro aqui servidor +page.server.js login admin ');
			return {
				status: '302',
				redirect: '/teacher/crearQuiz'
			};
		} else {
			return { status: 401, body: 'Inicio de sesión fallido servidor ' };
		}
	},

	loginPlayer: async ({ request }) => {
		console.log('Entro en el login player');
		const data = await request.formData();
		const loginResult = db.playerLogin(data.get('pin'), data.get('name'));
		console.log(loginResult);
		if (loginResult) {
			console.log('Entro aqui servidor +page.server.js login player  ');
			return {
				status: '302',
				redirect: '/player/usuario',
				body: JSON.stringify(loginResult.name)
			};
		} else {
			return { status: 401, body: 'Inicio de sesión fallido servidor  player ' };
		}
	}
};
