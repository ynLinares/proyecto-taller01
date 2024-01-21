<script>
	import Imagep from '../comambos/+imagep.svelte';
	export let evaluacion = '¡Ahorcado!';
	export let puntos = 'Has obtenido 1000 puntos ';
</script>

<main class="centro" style="border-color: rebeccapurple;">
	<div class="alinea">
		<Imagep />
	</div>
	<h1
		style=
        "margin: 0px;
        font-size: 2.5rem;
        font-family: inherit;
        line-height: normal;
        color: rgb(255, 255, 255);
        font-weight: bold;"
	>
		{evaluacion}
	</h1>
	<h2>{puntos}</h2>
</main>
