<script>
	// Importa las dependencias necesarias
	import { io } from 'socket.io-client';
	import Button from '../comambos/+button.svelte';

	// Declara e inicializa la variable 'name'
	let name = '';

	// Verifica si el código se está ejecutando en un entorno de navegador
	if (typeof window !== 'undefined') {
		// Si es así, recupera el nombre del jugador del almacenamiento local del navegador
		name = JSON.parse(window.localStorage.getItem('name'));
	}

	// Inicializa una conexión de socket
	let socket = io();

	// Imprime el nombre en la consola
	console.log(name);

	// Exporta la variable 'nombre' para que pueda ser utilizada en el marcado
	export let nombre = name;

	// Emite un evento 'newPlayer' a través del socket, enviando el nombre del jugador
	socket.emit('newPlayer',name);
</script>

<!-- Define el marcado del componente -->
<main style="border-color: rebeccapurple;">
	<div class="centro">
		<!-- Muestra una imagen para el jugador -->
		<img src="/ImagenesProyecto/2.png" alt="Imagen1" style="background-color: transparent;" />

		<!-- Muestra el nombre del jugador -->
		<h1
			style="margin: 0px; font-size: 2.5rem; font-family: inherit; line-height: normal; color: rgb(255, 255, 255); font-weight: bold;"
		>
			{nombre}
		</h1>

		<!-- Muestra un botón que, cuando se hace clic, redirige al jugador a '/player/loby' -->
		<Button nombre=" Listo" url="/player/loby"></Button>
	</div>
</main>