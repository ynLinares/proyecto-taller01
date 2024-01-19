import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite';

import { Server } from 'socket.io';

const players: unknown[] = [];

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.emit('updatePlayers', players);

			socket.on('newPlayer', (playername) => {
				players.push(playername);
				io.emit('updatePlayers', players);
			});

			socket.on('movimiento', (letter) => {
				console.log(letter);
				io.emit('letterplayer', letter);
			});

			socket.on('partida', (ok) => {
				console.log('partida' + ok);
				io.emit('partidaplayer', ok);
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
