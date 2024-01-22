<script>
	// Importa la función onMount de Svelte, que se ejecuta después de que el componente se monta en el DOM
	import { onMount } from 'svelte';

	// Importa los componentes Head e ImagePlayer desde las rutas especificadas
	import Head from '../comambos/+head.svelte';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';

	// Importa la función io de socket.io-client y la función goto de $app/navigation
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';

	// Inicializa una conexión de socket y declara varias variables
	let socket = io();
	let palabro;
	let players = [];
	let num = 0;
	let letter = '';

	// Declara un array de URLs de imágenes
	let imagen = [
		'/ImagenesProyecto/Dead.jpeg',
		'/ImagenesProyecto/Dead1.jpeg',
		'/ImagenesProyecto/Dead2.jpeg',
		'/ImagenesProyecto/Dead3.jpeg',
		'/ImagenesProyecto/Dead4.jpeg',
		'/ImagenesProyecto/Dead5.jpeg',
		'/ImagenesProyecto/Dead6.jpeg'
	];

	// Declara una reactividad de Svelte que actualiza imageUrl cada vez que num cambia
	$: imageUrl = imagen[num];

	// Define una función que se ejecuta después de que el componente se monta en el DOM
	onMount(() => {
		// Reinicializa la conexión de socket y define varios manejadores de eventos de socket
		socket = io();
		// Define el fin de ljuego 
		socket.on('over', (valor) => {
			if (!valor) {
				goto('/game');
			}
			if(valor){
				goto('/game');
			}
		});
		// Indica el contador de juagas 
		socket.on('cont', (cont) => {
			num = cont;
		});
		// Indica la palabra 
		socket.on('consultarPalabra', (palabraoculta) => {
			palabro = Array(palabraoculta.length).fill('_').join(' ');
		});
		// Actualzia los jugadores 
		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
		// Actualzia la palagra al acertar 
		socket.on('guiones', (palabra) => {
			palabro = palabra;
		});
	});

	// Define una función que se ejecuta cuando se envía el formulario
	const handleSubmit = () => {
		// Emite un evento de movimiento a través del socket, con el valor de letter como dato
		socket.emit('movimiento', letter);
	};
</script>

<!-- Instancia del componente Head con el título "Ahorcado" -->
<Head titulo="Ahorcado"></Head>

<!-- Estructura del juego -->
<div style="display: flex;">
	<div>
		<div class="cuadro centro">
			<div>
				<!-- Muestra la imagen actual -->
				<img src={imageUrl} alt="error" />
			</div>
			<div>
				<!-- Muestra la palabra actual y un formulario para enviar una letra -->
				{palabro}
				<form on:submit={handleSubmit}>
					<input type="text" bind:value={letter} />
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
		<div class="grid-container">
			<!-- Muestra un componente ImagePlayer para cada jugador -->
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
	</div>
</div>