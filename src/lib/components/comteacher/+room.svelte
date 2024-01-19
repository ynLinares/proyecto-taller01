<script>
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import Button from '../comambos/+button.svelte';
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';

	export let pin = '########';
	let players = [];
	let socket;
	onMount(() => {
		socket = io();

		socket.on('updatePlayers', (updatedPlayers) => {
        players = updatedPlayers;
    });
	});
</script>

<div class="centro" style="flex-direction: row">
	<div class="cuadro" style="width: 30%">
		<h2>Pin</h2>
		<h1>{pin}</h1>
	</div>
	<img src="/ImagenesProyecto/2.png" alt="super chevere" width="10%" height="10%" />
</div>
<div class="centro" style="flex-direction: row">
	<Button nombre="Iniciar" />
	<Button nombre="Candado" />
</div>
<div class="grid-container">
	{#each players as name}
		<ImagePlayer nombre={name} />
	{/each}
</div>
