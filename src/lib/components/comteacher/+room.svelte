<script>
	import '$lib/assets/Estilos.css';
	let pin = '########';
</script>

<div class="cuadro" style="background-color: transparent">
	<div class="centro" style="flex-direction: row">
		<div class="cuadro" style="width: 30%">
			<h2>Pin</h2>
			<h1>{pin}</h1>
		</div>
		<img src="ImagenesProyecto/2.png" alt="super chevere" width="10%" height="10%" />
	</div>
	<div class="centro" style="flex-direction: row">
		<button class="botton" id="iniciar">¡Iniciar!</button>
		<button class="botton" id="candado">
			<img src="imagen.png" alt="Candado" />
		</button>
	</div>
	<div class="jugadores">
		<div style="width: 100px; height: 100px; display: flex;">
			<img
				src="ImagenesProyecto/4.png"
				alt="supaer chevere"
				width="100%"
				height="100%"
				style="background-color: transparent"
			/>
			<div class="cuadro">
				<h2>jugador 1</h2>
			</div>
		</div>
		<div style="width: 100px; height: 100px; display: flex; justify-content: end;">
			<img
				src="ImagenesProyecto/5.png"
				alt="supaer chevere"
				width="100%"
				height="100%"
				style="background-color: transparent"
			/>
			<div class="cuadro">
				<h2>jugador 2</h2>
			</div>
		</div>
	</div>
</div>

