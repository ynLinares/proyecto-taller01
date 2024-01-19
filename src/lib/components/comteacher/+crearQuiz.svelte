<script>
	import Head from '../comambos/+head.svelte';
	import Titulo from '../comambos/+titulo.svelte';
	import RecuadroPregunta from '../comambos/+recuadroPregunta.svelte';
    import Button from '../comambos/+button.svelte';

    // agregar condicional si no se tiene pregunas guardadas
    export let titulopregunta = 'pregunta 1 ';
	export let respuestas = ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'];

</script>

<Head titulo="Ahorcado"></Head>

<div style="display: flex;">
	<div>
<div class="cuadro centro ">

</div>
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


</div>
