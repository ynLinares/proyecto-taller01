import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite';

import { Server } from 'socket.io';

const players: { name: string; punto: number }[] = [];
let palabraoculta = ' ';
let puntos = 0;
let cont = 0;
const imagen = [
	'/ImagenesProyecto/Dead.jpeg',
	'/ImagenesProyecto/Dead1.jpeg',
	'/ImagenesProyecto/Dead2.jpeg',
	'/ImagenesProyecto/Dead3.jpeg',
	'/ImagenesProyecto/Dead4.jpeg',
	'/ImagenesProyecto/Dead5.jpeg',
	'/ImagenesProyecto/Dead6.jpeg'
];
let imagenactual = imagen[cont];
const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			socket.emit('updatePlayers', players);
			socket.emit('consultarPalabra', palabraoculta);
			socket.emit('imagen', imagenactual);

			socket.on('newPlayer', (playername) => {
				players.push({ name: playername, punto: 0 });
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
					console.log('imagen ahora es ' + imagen[cont]);
				}
				if (valor) {
					puntos = puntos + 100;
					console.log(' el valor de los puntos ' + puntos);
				}
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
