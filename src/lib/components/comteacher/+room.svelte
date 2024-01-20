<script>
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
    import { goto } from '$app/navigation';
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

    	function onButtonClick() {
		socket.emit('partida', true);
            goto("/teacher/play");
	}

</script>

<div class="centro" style="flex-direction: row">
	<div class="cuadro" style="width: 30%">
		<h2>Pin</h2>
		<h1>{pin}</h1>
	</div>
	<img src="/ImagenesProyecto/2.png" alt="super chevere" width="10%" height="10%" />
</div>
<div class="centro" style="flex-direction: row">
	<button on:click={onButtonClick}>Iniciar</button>
</div>
<div class="grid-container">
	{#each players as name}
		<ImagePlayer nombre={name.name} />
	{/each}
</div>
