
<script>
	import { onMount } from 'svelte';
	import Head from '../comambos/+head.svelte';
	import Titulo from '../comambos/+titulo.svelte';
	import RecuadroPregunta from '../comambos/+recuadroPregunta.svelte';
	import Button from '../comambos/+button.svelte';
	import { io } from 'socket.io-client';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';

	let images = [
		'/ImagenesProyecto/Dead1.jpeg',
		'/ImagenesProyecto/Dead2.jpeg',
		'/ImagenesProyecto/Dead3.jpeg',
		// "/ImagenesProyecto/Dead4.jpeg",
		'/ImagenesProyecto/Dead5.jpeg',
		'/ImagenesProyecto/Dead6.jpeg'
	];
	let letter = ' letra desde crear quiz ';
	let socket = io();
	socket.emit('movimiento', letter);

	function onButtonClick() {
		socket.emit('movimiento', letter);
	}
	let players = [];
	onMount(() => {
		socket = io();

		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
	});
</script>

<Head titulo="Ahorcado"></Head>

<div style="display: flex;">
	<div>
		<div class="cuadro centro">
			<div>
				{#each images as image}
					<img src={image} alt="jamon" />
				{/each}
			</div>
		</div>
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play} />
			{/each}
		</div>
	</div>
</div>
