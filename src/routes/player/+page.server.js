// Importa todo desde '$lib/server/data.js' como 'db'
import * as db from '$lib/server/data.js';

// Exporta un objeto que contiene las acciones del servidor
export const actions = {
	// Define una acción llamada loginPlayer
	loginPlayer: async ({ request }) => {
		// Imprime un mensaje en la consola para indicar que se ha entrado en la función loginPlayer
		console.log('Entro en el login player');
		
		// Obtiene los datos del formulario de la solicitud
		const data = await request.formData();
		
		// Intenta iniciar sesión con el pin y el nombre obtenidos del formulario
		const loginResult = db.playerLogin(data.get('pin'), data.get('name'));
		
		// Bandera
		console.log(loginResult);
		
		// Si el inicio de sesión fue exitoso
		if (loginResult) {
			//Bandera 
			console.log('Entro aqui servidor +page.server.js login player  ');
			
			// Retorna un objeto con el estado 302 (redirección)
			//  la URL de redirección y el nombre del jugador
			return {
				status: '302',
				redirect: '/player/usuario',
				body: JSON.stringify(loginResult.name)
			};
		} else {
			// Si el inicio de sesión falló, retorna un objeto con el estado 
			// 401 (no autorizado) y un mensaje de error
			return { status: 401, body: 'Inicio de sesión fallido servidor  player ' };
		}
	}
};