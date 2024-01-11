<script>
	import Head from '../comambos/+head.svelte';
	import Button from '../comambos/+button.svelte';
    export let usuario ="Usuario";
</script>

<main class="centro" style="width: 100%;">
	<Head titulo ={usuario} src="/ImagenesProyecto/585e4beacb11b227491c3399.png"></Head>
	<div class="centro">
		<Button nombre="Crear Quiz (+)" url="/teacher/crearQuiz"></Button>
	</div>
</main>
