<script>
	import '$lib/assets/Estilos.css';

	export let nombre = '';
	export let pin = '';
	function handleSubmit() {}
</script>

<div class="centro">
	<img
		src="ImagenesProyecto/Kahoot.png"
		alt="Imagen1"
		style="background-color: transparent; width: 252px;"
	/>
	<div class="cuadro">
		<form on:submit={handleSubmit}>
			<input
				name="nombre"
				type="text"
				class="pin"
				placeholder="Nombre de Usuario"
				bind:value={nombre}
				required
			/>
			<input name="pin" type="text" class="pin" placeholder="Pin" bind:value={pin} required />
			<button class="botton">Ingresar</button>
		</form>
	</div>
</div>

<style>
	.centro {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.cuadro {
		width: 50%;
	}

	.pin {
		width: 100%;
		padding: 10px;
		border: 1px solid #000;
		border-radius: 5px;
	}

	.botton {
		width: 100%;
		height: 40px;
		border: 1px solid #000;
		border-radius: 5px;
		background-color: #ffffff;
		color: #000;
		font-size: 18px;
		font-weight: bold;
	}
</style>
