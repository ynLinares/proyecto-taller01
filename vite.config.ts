// Importa el paquete sveltekit de @sveltejs/kit/vite para configurar el servidor Vite para SvelteKit
import { sveltekit } from '@sveltejs/kit/vite';

// Importa los tipos y funciones necesarios de 'vite' para configurar el servidor Vite
import { type ViteDevServer, defineConfig } from 'vite';

// Importa todo desde './src/lib/server/data.js' como 'db' usado como base de datos 
import * as db from './src/lib/server/data.js';

// Importa la clase Server de 'socket.io' para crear un servidor WebSocket
import { Server } from 'socket.io';

// Iniciliza un array vacío para almacenar los jugadores con un nombre 
const players: { name: string }[] = [];

// Inicializ una variable para almacenar la palabra oculta en el juego
let palabraoculta = ' ';

// Incializa una variable para almacenar los puntos en el juego
let puntos = 0;

// Iniciliza un contador para señalar el final del juego
let cont = 0;

// Inicialia una variable para almacenar el administrador del juego
let admin ="";

// Inicializa una variable para almacenar el pin del juego
let pin ="";

// Inicializa 
let victoria=false;

// Define un objeto para configurar el servidor WebSocket
const webSocketServer = {
	// Nombre del servidor 
    name: 'webSocketServer',
    configureServer(server: ViteDevServer) {
        // Si el servidor HTTP no está definido, termina la ejecución
        if (!server.httpServer) return;

        // Crea un nuevo servidor WebSocket usando el servidor HTTP
        const io = new Server(server.httpServer);

        // Cuando un cliente se conecta al servidor WebSocket
        io.on('connection', (socket) => {
            // Envía a los clientes la lista de jugadores 
			// la palabra oculta, el contador, el pin y los puntos
            socket.emit('updatePlayers', players);
            socket.emit('consultarPalabra', palabraoculta);
            socket.emit('cont',cont);
            socket.emit('pin',pin);
            socket.emit('puntos',puntos);
            socket.emit('victoria',victoria);

            // Cuando el cliente envía el evento 'admin'
			//  actualiza el administrador y el pin
            socket.on('admin',(newamid)=>{
                admin=newamid;
				// El pin se guarda desde la base de datos 
				// con el nombre del adminstrador 
                pin=db.getPin(admin) as string;
            });

            // Cuando el cliente envía el evento 'newPlayer', agrega el 
			// nuevo jugador a la lista y la envía a los clientes
            socket.on('newPlayer', (playername) => {
                players.push({ name: playername });
                io.emit('updatePlayers', players);
            });

            // Cuando el anfitrion envía el evento 'movimiento',
			//  envía la letra a los clientes
            socket.on('movimiento', (letter) => {
				// bandera 
                // console.log(' palabra enviada del jugador ' + letter);

				// Emite la letra al anfitrion 
                io.emit('letterplayer', letter);
            });

            // Cuando el cliente envía el evento 'respuesta'
			// actualiza el contador y los puntos y 
			// los envía a los clientes
            socket.on('respuesta', (valor) => {
				// bandera 
                // console.log('valor recibido de admin ' + valor);
                if (!valor) {
                    cont = cont + 1;
					// bandera 
                    console.log(cont);
					// Si el contador llega 
					// al maximo el juego 
					// termina 
                    if(cont>6){
                        cont=0;
                        io.emit('over', valor);
                    }
                }
				// Puntos en aumento
                if (valor) {
					// cada letra son 100 puntos mas 
                    puntos = puntos + 100;
					// bandera 
                    console.log(' el valor de los puntos ' + puntos);
                }
				// trasmite el contador a los jugadores 
                io.emit('cont',cont);
            });

            // Cuando el cliente envía el evento 'partida'
			//  envía el estado de la partida a los clientes
            socket.on('partida', (ok) => {
				// bandera 
                console.log('partida ' + ok);
                io.emit('partidaplayer', ok);
            });

            // Cuando el cliente envía el evento 'guardarpalabra'
			// ctualiza la palabra ocultta y la envía a los clientes
            socket.on('guardarpalabra', (palabra) => {
                // bandera 
				console.log('palabra oculta es  ' + palabra);
                palabraoculta = palabra;
                console.log(palabraoculta);
                io.emit('guiones',palabraoculta);
                if (!palabraoculta.includes('_')) {
                    console.log(!palabraoculta.includes('_'));
                    victoria=true;
                    console.log(victoria);
                    io.emit('over',true);
                }
            });
        });
    }
};

// Exporta la configuración del 
// servidor Vite con los plugins sveltekit y webSocketServer
export default defineConfig({
    plugins: [sveltekit(), webSocketServer]
});