<script>
	import { io } from 'socket.io-client';
    import Button from '../comambos/+button.svelte';
    export let name = '';
    export let url ='';
    export let comoyoquiera='';
console.log("inicioo");
</script>

<main style="border-color: rebeccapurple; padding: 50px;">
	<div class="centro">
		<!-- Componenete donde cambiar la imagen del jugador  -->
		<img src="/ImagenesProyecto/2.png" alt="Imagen1" style="background-color: transparent;" />
		<h1
			style="margin: 0px; font-size: 2.5rem; font-family: inherit; line-height: normal; color: rgb(255, 255, 255); font-weight: bold;"
		>
			{name}
		</h1>
		<Button nombre={comoyoquiera} url={url}></Button>
	</div>
</main>
