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
	export let palabraocult = ''; 
	const imagen = [
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
			const indices = [];
			// Convertir palabra en un array
			let palabraArray = palabra.split(' ');

			// Buscar la letra en palabraocult
			for (let i = 0; i < palabraocult.length; i++) {
				if (palabraocult[i] === letter) {
					indices.push(i);
				}
			}

			// Si la letra existe, reemplazarla en la misma posición en palabraArray
			indices.forEach((index) => {
				palabraArray[index] = letter;
			});

			// Convertir palabraArray de nuevo a una cadena
			palabra = palabraArray.join(' ');

			const valor = indices.length > 0;
			socket.emit('respuesta', valor);
			socket.emit('guardarpalabra', palabra);
		});
	});
</script>

<Head titulo="Ahorcado"></Head>

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
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
	</div>
</div>
