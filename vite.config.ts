import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite';

import { Server } from 'socket.io';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.on('eventFromClient', (message) => {
				console.log(message); // Debería imprimir 'A'
				// Emitir el mensaje a todos los clientes conectados
				io.emit('eventFromServer', message);
			});
			socket.on('anotherEventFromClient', (message) => {
				console.log(message); // Manejar el evento aquí
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
