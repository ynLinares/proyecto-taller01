<script>
	import '$lib/assets/Estilos.css';
</script>

<main class="centro">
	<h1>
		<img
			src="ImagenesProyecto/Kahoot_Logo.svg.png"
			alt="Imagen1"
			style="background-color: transparent; width: 252px;"
		/>
	</h1>

	<div class="alinea">
		<form class="cuadro" action="login.php" method="post">
			<input
				class="pin"
				type="text"
				name="pin"
				id="pin"
				placeholder="Pin"
				inputmode="numeric"
				width="100%"
			/>
			<button class="botton">Ingresar</button>
		</form>
	</div>
</main>

<style>
	/* Agrega aquí los estilos de Estilos.css si deseas incluirlos en el componente */
</style>
