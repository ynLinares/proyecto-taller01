<script>
    import { io } from 'socket.io-client';
	import Head from '../comambos/+head.svelte';
    import { goto } from '$app/navigation';
	export let usuario = 'Usuario';
	let respons;
    let palabra="";
    let socket = io();

	async function word() {
		const response = await fetch('https://pow-3bae6d63ret5.deno.dev/word');
		respons = await response.json(); // Obtener el objeto JSON de la respuesta
        palabra=respons.word;
        console.log(respons)
        console.log(palabra)

	}
    	function onButtonClick() {
        socket.emit('guardarpalabra',(palabra));
            goto("/teacher/room");
	}
</script>

<main class="centro" style="width: 100%;">
	<Head titulo={usuario} src="/ImagenesProyecto/585e4beacb11b227491c3399.png"></Head>
	<p>{palabra}</p>
	<button class="botton" on:click={word}> "jamon" </button>
	<div class="centro">
<button on:click={onButtonClick}>Juego</button>	</div>
</main>
