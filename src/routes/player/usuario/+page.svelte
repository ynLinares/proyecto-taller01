<script>
	// Importa el componente Player desde la ruta especificada
	import Player from '$lib/components/complayer/+player.svelte';

	// Importa la función io desde la biblioteca socket.io-client
	import { io } from 'socket.io-client';

	// Crea una nueva conexión de socket
	const socket = io();

	// Declara una variable llamada name
	let name;

	// Si el código se está ejecutando en un navegad
	if (typeof window !== 'undefined') {
		// Obtiene el valor de 'name' del almacenamiento local del navegador y lo parsea como json
		name = JSON.parse(window.localStorage.getItem('name'));
	}

	// Emite un evento 'newPLayer' a través del socket, con el valor de name como dato
	socket.emit('newPLayer', name);

	// Imprime el valor de name en la consola
	console.log('name dentopr de player ' + name);
</script>

<!-- Instancia del componente Player. 
Este componente podría representar una interfaz de jugador 
en la aplicación. 
		 -->
<Player />
