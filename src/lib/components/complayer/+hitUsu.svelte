<script>
	import { onMount } from 'svelte';
	import Imagep from '../comambos/+imagep.svelte';
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';
	export let evaluacion ='';
	export let puntaje = ' ';


	let socket = io();
	onMount(() => {
		socket.on('puntos', (puntos) => {
			puntaje = puntos;
		});
		socket.on('victoria',(victoria)=>{
			if(victoria){
				evaluacion="Victoria ";
			}
			if(!victoria){
				evaluacion="Ahorcado";
			}
		});
	});
</script>

<main class="centro" style="border-color: rebeccapurple;">
	<div class="centro">
		<Imagep />
	</div>
	<h1
		style="margin: 0px;
        font-size: 2.5rem;
        font-family: inherit;
        line-height: normal;
        color: rgb(255, 255, 255);
        font-weight: bold;"
	>
		{evaluacion}
	</h1>
	<h2>Lograron {puntaje} Puntos </h2>
</main>
