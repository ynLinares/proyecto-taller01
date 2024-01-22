<script>
	// Importa las dependencias necesarias
	import { io } from 'socket.io-client';
	import Head from '../comambos/+head.svelte';
	import { goto } from '$app/navigation';
	import Titulo from '../comambos/+titulo.svelte';

	// Declara las variables necesarias
	let usuario = 'Palabra oculta ';
	let respons;
	let palabra = '';
	let socket = io();

	// Define una función asíncrona para obtener una palabra de una API
	async function word() {
		// Realiza una solicitud a la API
		const response = await fetch('https://pow-3bae6d63ret5.deno.dev/word');
		// Convierte la respuesta en un objeto JSON
		respons = await response.json();
		// Almacena la palabra en la variable palabra
		palabra = respons.word;
		// Imprime la respuesta y la palabra en la consola
		console.log(respons);
		console.log(palabra);
	}

	// Define una función para manejar el clic en el botón
	function onButtonClick() {
		// Emite un evento de socket con la palabra
		socket.emit('guardarpalabra', palabra);
		// Navega a '/teacher/room'
		goto('/teacher/room');
	}
</script>

<!-- Muestra el título y la palabra -->
<div class="centro">
	<Head titulo={usuario}></Head>
	<Titulo tituloChiquito = {palabra} />
	<div class="cuadro">
		<!-- Muestra un botón para obtener una palabra y un botón para iniciar el juego -->
		<button class="botton" on:click={word}> "Obtener palabra" </button>
		<button class="botton" on:click={onButtonClick}>Juego</button>
	</div>
</div>

<!-- Define el estilo del cuadro -->
<style>
	.cuadro {
		width: 50%;
	}
</style>