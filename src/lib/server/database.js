// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.

// Manejo de la base de datos 
const db = new Map();

/**
 * @param {any} userid
 */
export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

/**
 * @param {any} userid
 * @param {any} description
 */
export function createTodo(userid, description) {
	
	// validacion 
	if (description === '') {
		throw new Error('todo must have a description');
	}

	const todos = db.get(userid);

	// validacion
	if (todos.find((/** @type {{ description: any; }} */ todo) => todo.description === description)) {
		throw new Error('todos must be unique');
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

/**
 * @param {any} userid
 * @param {any} todoid
 */
export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((/** @type {{ id: any; }} */ todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

