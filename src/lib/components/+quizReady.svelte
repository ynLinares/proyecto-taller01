<script>
    import Button from "./+button.svelte";
	export let nombre = '';
	export let preguntas = ['', '', ''];
</script>

<div class="centro">
	<div class="cuadro">
		<div style="display: flex">
			<div style="width: 25%;">
				<h2>{nombre}</h2>
                <Button nombre="Iniciar" />
			</div>
			<div style="background-color: black; width: 10px"></div>
			<div>
				{#each preguntas as pregunta}
					<h3>{pregunta}</h3>
				{/each}
			</div>
		</div>
	</div>
</div>
