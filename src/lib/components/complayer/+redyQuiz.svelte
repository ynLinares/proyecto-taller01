<script>
	// Importa las dependencias necesarias
	import { onMount } from 'svelte';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import Imagep from '../comambos/+imagep.svelte';
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';

	// Declara las variables necesarias
	let socket;
	let players = [];

	// Imprime los jugadores en la consola
	console.log('player dentro del redy ' + players);

	let player;
	// Verifica si el código se está ejecutando en un entorno de navegador
	if (typeof window !== 'undefined') {
		// Si es así, recupera el nombre del jugador del almacenamiento local del navegador
		player = JSON.parse(window.localStorage.getItem('name'));
	}

	// Imprime el nombre del jugador en la consola
	console.log('player = ' + player);

	// Exporta la variable 'nombre' para que pueda ser utilizada en el marcado
	export let nombre = player;

	// Define una función para ejecutar cuando el componente se monta
	onMount(() => {
		// Inicializa una conexión de socket
		socket = io();

		// Escucha el evento 'updatePlayers' del socket
		socket.on('updatePlayers', (updatedPlayers) => {
			// Actualiza la lista de jugadores
			players = updatedPlayers;

			// Escucha el evento 'partidaplayer' del socket
			socket.on('partidaplayer', (ok) => {
				// Navega a '/player/juego'
				goto('/player/juego');
			});
		});
	});

	// Define una función para manejar el clic en el botón
	function onButtonClick() {
		// Emite un evento 'movimiento' a través del socket, enviando un mensaje
		socket.emit('movimiento', 'letra enviada desde el jugador ');
	}
</script>

<!-- Define el marcado del componente -->
<main style="width: 100%; border: 5px solid midnightblue; gap: 28px">
	<div class="centro">
		<!-- Muestra una imagen -->
		<Imagep />

		<!-- Muestra el nombre del jugador -->
		<p>{nombre}</p>

		<!-- Muestra una lista de jugadores -->
		<div class="grid-container">
			{#each players as play}
				<!-- Para cada jugador, muestra una imagen y el nombre del jugador -->
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>

		<!-- Muestra un botón para enviar un movimiento -->
		<div style="background-color: aliceblue; border: 3px solid midnightblue">
			<h1>Listo</h1>
			<button on:click={onButtonClick}>Enviar</button>
		</div>
	</div>
</main>