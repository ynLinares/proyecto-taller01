<script>
	import Head from '../comambos/+head.svelte';
	import Button from '../comambos/+button.svelte';
	export let usuario = 'Usuario';
	let respons;
    let palabra="";

	async function word() {
		const response = await fetch('https://pow-3bae6d63ret5.deno.dev/word');
		respons = await response.json(); // Obtener el objeto JSON de la respuesta
       palabra=respons.word;
        console.log(respons)
        console.log(palabra)

	}
</script>

<main class="centro" style="width: 100%;">
	<Head titulo={usuario} src="/ImagenesProyecto/585e4beacb11b227491c3399.png"></Head>
	<p>{palabra}</p>
	<button class="botton" on:click={word}> "jamon" </button>
	<div class="centro">
		<Button nombre="Crear Quiz (+)" url="/teacher/room"></Button>
	</div>
</main>
