import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite';

import { Server } from 'socket.io';

const players: { name: string }[] = [];
let palabraoculta = ' ';
let puntos = 0;
let cont = 0;

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.emit('updatePlayers', players);
			socket.emit('consultarPalabra', palabraoculta);
			socket.emit('cont',cont);

			socket.on('newPlayer', (playername) => {
				players.push({ name: playername });
				io.emit('updatePlayers', players);
			});

			socket.on('movimiento', (letter) => {
				console.log(' palabra enviada del jugador ' + letter);
				io.emit('letterplayer', letter);
			});

			socket.on('respuesta', (valor) => {
				console.log('valor resivido de admin ' + valor);
				if (!valor) {
					cont = cont + 1;
					console.log(cont);
					if(cont>7){
						io.emit('over', valor);
					}
				}
				if (valor) {
					puntos = puntos + 100;
					console.log(' el valor de los puntos ' + puntos);
				}
				io.emit('cont',cont);
			});

			socket.on('partida', (ok) => {
				console.log('partida ' + ok);
				io.emit('partidaplayer', ok);
			});

			socket.on('guardarpalabra', (palabra) => {
				console.log('palabra oculta es  ' + palabra);
				palabraoculta = palabra;
				console.log(palabraoculta);
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
