<script>
	import { io } from 'socket.io-client';
	import Head from '../comambos/+head.svelte';
	import { goto } from '$app/navigation';
	import Titulo from '../comambos/+titulo.svelte';
	let usuario = 'Palabra oculta ';
	let respons;
	let palabra = '';
	let socket = io();

	async function word() {
		const response = await fetch('https://pow-3bae6d63ret5.deno.dev/word');
		respons = await response.json(); // Obtener el objeto JSON de la respuesta
		palabra = respons.word;
		console.log(respons);
		console.log(palabra);
	}
	function onButtonClick() {
		socket.emit('guardarpalabra', palabra);
		goto('/teacher/room');
	}
</script>

<div class="centro">
	<Head titulo={usuario}></Head>
	<Titulo tituloChiquito = {palabra} />
	<div class="cuadro">
		<button class="botton" on:click={word}> "Obtener palabra" </button>

		<button class="botton" on:click={onButtonClick}>Juego</button>
	</div>
</div>

<style>
	.cuadro {
		width: 50%;
	}
</style>