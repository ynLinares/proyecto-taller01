<script>
	import { onMount } from 'svelte';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import Imagep from '../comambos/+imagep.svelte';
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';

	let socket;

	let players = [];

	console.log('player dentro del redy ' + players);
	let player;
	if (typeof window !== 'undefined') {
		player = JSON.parse(window.localStorage.getItem('name'));
	}
	console.log('player = ' + player);
	export let nombre = player;

	onMount(() => {
		socket = io();
		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
			socket.on('partidaplayer', (ok) => {
				goto('/player/juego');
			});
		});
	});

	function onButtonClick() {
		socket.emit('movimiento', 'letra enviada desde el jugador ');
	}
</script>

<main style="width: 100%; border: 5px solid midnightblue; gap: 28px">
	<div class="centro">
		<Imagep />
		<p>{nombre}</p>
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
		<div style="background-color: aliceblue; border: 3px solid midnightblue">
			<h1>Listo</h1>
			<button on:click={onButtonClick}>Enviar</button>
		</div>
	</div>
</main>
