<script>
	// @ts-nocheck
	let nombre;
	let pin;
	export let action = '';
</script>

<div class="cuadro">
	<!-- cambiar el metodo a post para la validacion  -->
	<form method="get " {action}>
		{#if action === '/teacher'}
			<input
				name="nombre"
				type="text"
				class="pin"
				placeholder="Nombre de Usuario"
				bind:value={nombre}
				required
			/>
		{/if}
		<input name="pin" type="text" class="pin" placeholder="Pin" bind:value={pin} required />

		<button class="botton">Ingresar</button>
	</form>
</div>

<style>
	.cuadro {
		width: 50%;
	}

	.pin {
		width: 100%;
		padding: 10px;
		border: 1px solid #000;
		border-radius: 5px;
		color: #000;
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
