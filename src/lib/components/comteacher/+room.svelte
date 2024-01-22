<script>
	// Importa el componente ImagePlayer, la función goto de $app/navigation, la función io de socket.io-client y la función onMount de Svelte
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import { goto } from '$app/navigation';
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';
	
	// Exporta la variable Pin con un valor inicial de '########'
	export let Pin = '########';

	// Declara la variable players como un array vacío y la variable socket
	let players = [];
	let socket;

	// Define una función que se ejecuta después de que el componente se monta en el DOM
	onMount(() => {
		// Inicializa la conexión de socket
		socket = io();

		// Define los manejadores de eventos de socket para actualizar los jugadores y el pin
		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
		socket.on('pin', (pin) => {
			Pin = pin;
		});
	});

	// Define una función que se ejecuta cuando se hace clic en el botón
	function onButtonClick() {
		// Emite un evento de partida a través del socket y navega a '/teacher/play'
		socket.emit('partida', true);
		goto('/teacher/play');
	}
</script>

<!-- Muestra el pin y una imagen -->
<div class="centro" style="flex-direction: row">
	<div class="cuadro" style="width: 30%">
		<h2>Pin</h2>
		<h1>{Pin}</h1>
	</div>
	<img src="/ImagenesProyecto/2.png" alt="super chevere" width="10%" height="10%" />
</div>

<!-- Muestra un botón para iniciar -->
<div class="centro" style="flex-direction: row">
	<button class="botton" on:click={onButtonClick}>Iniciar</button>
</div>

<!-- Muestra un componente ImagePlayer para cada jugador -->
<div class="grid-container">
	{#each players as name}
		<ImagePlayer nombre={name.name} />
	{/each}
</div>