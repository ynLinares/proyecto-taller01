<script>
	import { onMount } from 'svelte';
	import Head from '../comambos/+head.svelte';
	import { io } from 'socket.io-client';
	import ImagePlayer from '../comambos/+imagePlayer.svelte';

	let letter = ' letra desde crear quiz ';

	let socket = io();
	let palabra;
	let players = [];
	let src = "";

	export let palabraocult = '';

	onMount(() => {

        socket.on('imagen', (imagenactual)=>{
            src=imagenactual
        });
		socket.on('consultarPalabra', (palabraoculta) => {
			palabraocult = palabraoculta;
			palabra = Array(palabraocult.length).fill('_').join(' ');
		});
		socket.on('updatePlayers', (updatedPlayers) => {
			players = updatedPlayers;
		});
		socket.on('letterplayer', (letter) => {
			const valor = palabraocult.includes(letter);
			socket.emit('respuesta', valor);
		});
	});
</script>

<Head titulo="Ahorcado"></Head>

<div style="display: flex;">
	<div>
		<div class="cuadro centro">
			<div>
				<img {src} alt="error" />
			</div>
			<div>
				{palabraocult}
			</div>
			<div>
				{palabra}
			</div>
		</div>
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play} />
			{/each}
		</div>
	</div>
</div>
