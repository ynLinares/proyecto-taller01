import * as db from '$lib/server/data.js';
import { error } from '@sveltejs/kit';

export async function load() {
	const players = db.getAllPlayers();
	if (!players) throw error(404);
	return {
		players
	};
}
