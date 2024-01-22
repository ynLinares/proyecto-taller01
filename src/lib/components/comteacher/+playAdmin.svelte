<script>
	// Importa las dependencias necesarias
	import { onMount } from 'svelte';
	import Head from '../comambos/+head.svelte';
	import { io } from 'socket.io-client';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import { goto } from '$app/navigation';

	// Inicializa la conexión de socket
	let socket = io();

	// Declara las variables necesarias
	let palabra;
	let players = [];
	let num = 0;
	export let palabraocult = ''; 

	// Define un array de imágenes
	const imagen = [
		'/ImagenesProyecto/Dead.jpeg',
		'/ImagenesProyecto/Dead1.jpeg',
		'/ImagenesProyecto/Dead2.jpeg',
		'/ImagenesProyecto/Dead3.jpeg',
		'/ImagenesProyecto/Dead4.jpeg',
		'/ImagenesProyecto/Dead5.jpeg',
		'/ImagenesProyecto/Dead6.jpeg'
	];

	// Actualiza imageUrl cada vez que num cambia
	$: imageUrl = imagen[num];

	// Define una función que se ejecuta después de que el componente se monta en el DOM
	onMount(() => {
		// Define los manejadores de eventos de socket
		socket.on('over',(valor)=>{
			if(!valor){
				goto("/game");
			}
		});
		socket.on('cont', (cont) => {
			num = cont;
		});
		socket.on('consultarPalabra', (palabraoculta) => {
			palabraocult = palabraoculta;
			palabra = Array(palabraocult.length).fill('_').join(' ');
		});
		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
		socket.on('letterplayer', (letter) => {
			// Procesa la letra recibida
			const indices = [];
			let palabraArray = palabra.split(' ');
			for (let i = 0; i < palabraocult.length; i++) {
				if (palabraocult[i] === letter) {
					indices.push(i);
				}
			}
			indices.forEach((index) => {
				palabraArray[index] = letter;
			});
			palabra = palabraArray.join(' ');
			const valor = indices.length > 0;
			socket.emit('respuesta', valor);
			socket.emit('guardarpalabra', palabra);
		});
	});
</script>

<!-- Muestra el título del juego -->
<Head titulo="Ahorcado"></Head>

<!-- Muestra la imagen, la palabra oculta y la palabra actual -->
<div style="display: flex;">
	<div>
		<div class="cuadro centro">
			<div>
				<img src={imageUrl} alt="error" />
			</div>
			<div>
				{palabraocult}
			</div>
			<div>
				{palabra}
			</div>
		</div>
		<!-- Muestra un componente ImagePlayer para cada jugador -->
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
	</div>
</div>