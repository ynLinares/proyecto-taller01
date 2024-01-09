/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// ail para errores del usuario
import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';
//  Manejo de cookies para el uso de data

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

// actions que resive la descricion dle page.svelte
export const actions = {
	// actions creaar
	create: async ({ cookies, request }) => {
		// Crea una promesa que termina en 1 segundo
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		// db.createTodo(cookies.get('userid'), data.get('description'));

		// try catch

		try {
			db.createTodo(cookies.get('userid'), data.get('description'));
		} catch (error) {
			return fail(422, {
				description: data.get('description'),

				error: error.message
			});
		}
	},

	// action eliminar
	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
