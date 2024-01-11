<script>
	import Head from '../comambos/+head.svelte';
	import Titulo from '../comambos/+titulo.svelte';
	import RecuadroPregunta from '../comambos/+recuadroPregunta.svelte';
	import ImageTema from '../comambos/+imageTema.svelte';
    import Button from '../comambos/+button.svelte';

    export let titulopregunta = 'pregunta 1 ';
	export let nombreQuiz = 'Quiz xyz';
	export let respuestas = ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'];

</script>

<Head titulo={nombreQuiz}></Head>

<div style="display: flex;">
	<div>
		<Titulo tituloChiquito={titulopregunta} />

		<div style="display: flex; justify-content: space-between;">
			<div>
				<RecuadroPregunta respuesta={respuestas[0]} />
				<RecuadroPregunta respuesta={respuestas[1]} />
			</div>
			<div>
				<RecuadroPregunta respuesta={respuestas[2]} />
				<RecuadroPregunta respuesta={respuestas[3]} />
			</div>
		</div>
	</div>

	<div style="width: 25%; max-width: none;">
		<h2>Temas</h2>
		<div class="grid-container">
            <ImageTema url="/ImagenesProyecto/2.png" />
            <ImageTema url="/ImagenesProyecto/2.png" />
            <ImageTema url="/ImagenesProyecto/2.png" />
            <ImageTema url="/ImagenesProyecto/2.png" />
		</div>

		<h3>Limite de tiempo</h3>
		<select class="botton" style="margin: 0px;">
			<option value="1">30 segundos</option>
			<option value="2">40 segundos</option>
			<option value="3">60 segundos</option>
		</select>

        <Button nombre = "Agregar pregunta " url ="/teacher/crearPregunta" />
        <Button nombre = "Crear" url ="/teacher" />
	</div>
</div>
