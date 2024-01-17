<script>

    import Button from '../comambos/+button.svelte';
	let name = '';

	if (typeof window !== 'undefined') {
		name = JSON.parse(window.localStorage.getItem('name'));
	}

	console.log(name);
	export let nombre = name;
</script>

<main style="border-color: rebeccapurple;">
	<div class="centro">
		<!-- Componenete donde cambiar la imagen del jugador  -->
		<img src="/ImagenesProyecto/2.png" alt="Imagen1" style="background-color: transparent;" />
		<h1
			style="margin: 0px; font-size: 2.5rem; font-family: inherit; line-height: normal; color: rgb(255, 255, 255); font-weight: bold;"
		>
			{nombre}
		</h1>
		<Button nombre=" Listo" url="/player/loby"></Button>
	</div>
</main>
