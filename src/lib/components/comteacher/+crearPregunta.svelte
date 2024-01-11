<script>
	// @ts-nocheck

	let pregunta = '';
	let tiempo = '';
	let respuestaCorrecta = '';
	let respuestas = ['', '', '', ''];
	function handleSubmit() {
		dispatch('submit', { pregunta, tiempo, respuestaCorrecta, respuestas });
	}
</script>

<div class="cuadro centro" style="width: 100% height: 70%;">
	<label>
		Pregunta
		<input type="text" placeholder="Pregunta" class="pin" bind:value={pregunta} />
	</label>
</div>
<from>
	<div style="display: flex; width: 99%; justify-content: space-between;">
		<div class="circulo">
			<label style="text-align: center;">
				Tiempo
				<input
					style="text-align: center;"
					placeholder="Segundos"
					type="number"
					class="pin"
					bind:value={tiempo}
				/>
			</label>
		</div>
		<div class="circulo">
			<label style="text-align: center;">
				Respuesta
				<input
					style="text-align: center;"
					type="number"
					class="pin"
					placeholder="Opcion"
					bind:value={respuestaCorrecta}
				/>
			</label>
		</div>
	</div>
	<div style="display: flex; justify-content: space-between;">
		<div>
			<div class="cuadro" style="display: flex; padding: 1px;">
				<h2>Respuesta 1</h2>
				<label>
					<input type="text" placeholder="Respuesta" class="pin" bind:value={respuestas[0]} />
				</label>
			</div>
			<div class="cuadro" style="display: flex; padding: 1px;">
				<h2>Respuesta 2</h2>
				<label>
					<input type="text" placeholder="Respuesta" class="pin" bind:value={respuestas[1]} />
				</label>
			</div>
		</div>
		<div>
			<div class="cuadro" style="display: flex; padding: 1px;">
				<h2>Respuesta 3</h2>
				<label>
					<input type="text" placeholder="Respuesta" class="pin" bind:value={respuestas[2]} />
				</label>
			</div>
			<div class="cuadro" style="display: flex; padding: 1px;">
				<h2>Respuesta 4</h2>
				<label>
					<input type="text" placeholder="Respuesta" class="pin" bind:value={respuestas[3]} />
				</label>
			</div>
		</div>
	</div>
</from>

<style>
    label{
        width: 100%;
    }
</style>