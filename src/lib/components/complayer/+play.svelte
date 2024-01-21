<script>
	import { onMount } from 'svelte';
	import Head from '../comambos/+head.svelte';
	import { io } from 'socket.io-client';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import { goto } from '$app/navigation';
	let socket = io();
	let palabra;
	let players = [];
	let num = 0;
	let letter = "";

	let imagen = [
		'/ImagenesProyecto/Dead.jpeg',
		'/ImagenesProyecto/Dead1.jpeg',
		'/ImagenesProyecto/Dead2.jpeg',
		'/ImagenesProyecto/Dead3.jpeg',
		'/ImagenesProyecto/Dead4.jpeg',
		'/ImagenesProyecto/Dead5.jpeg',
		'/ImagenesProyecto/Dead6.jpeg'
	];
	$: imageUrl = imagen[num];

	onMount(() => {
		socket = io();
		socket.on('over',(valor)=>{
			if(!valor){
				goto("/game");
			}
		});
		socket.on('cont', (cont) => {
			num = cont;
		});
		socket.on('consultarPalabra', (palabraoculta) => {
			palabra = Array(palabraoculta.length).fill('_').join(' ');
		});

		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
		socket.on('palabra',(palabra)=>{
			palabrao =palabra;
		})
	});
	const handleSubmit = () => {
		// Enviar el formulario
		socket.emit('movimiento', letter);
	};
</script>

<Head titulo="Ahorcado"></Head>

<div style="display: flex;">
	<div>
		<div class="cuadro centro">
			<div>
				<img src={imageUrl} alt="error" />
			</div>
			<div>
				{palabra}
				<form on:submit={handleSubmit}>
					<input type="text" bind:value={letter} />
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
	</div>
</div>
