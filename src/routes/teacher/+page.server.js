// Servidor de teacher 

//Carga de base de datos ficticia  
import * as db from '$lib/server/data.js';

// Actions 
// aciones que usan los formularios 
// en las metodos  POST  
// usando action : "?login"

export const actions = {
	// Estas aciones se ejecutan del 
	// aldo del servidor 
	// evitando la manipualcion 
	// delcliente 
	// y permitiendo reutilizarlas 

	// action login 
	login: async ({ request }) => {
		// Bandera 
		// console.log('Entro en el login admin');

		//Carga de la data desde el form 
		const data = await request.formData();

		// loginResult 
		// consulta a la base de datos 
		// es un booleano 
		// db.adminlogin 
		// verifia que le nombre 
		// y la password del formulario 
		// coincidan con un Admin en 
		// la base de datos 
		const loginResult = db.adminLogin(data.get('name'), data.get('password'));
		
		// Bandera que muestra loginResult 
		// console.log(loginResult);

		// Condicdional
		// loginResult 
		// regresa un objeto 
		// con el estado y a donde redirigir 
		
		if (loginResult) {
			console.log('Entro aqui servidor +page.server.js login admin ');
			return {
				status: '302',
				redirect: '/teacher/crearQuiz',
			};
		} else {
			console.log('fallido')
			return {
				status: '401',
				body: 'Inicio de sesión fallido'
			};
		}
	},
};
