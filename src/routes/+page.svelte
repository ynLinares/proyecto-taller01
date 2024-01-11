<script>
	// listo
	import CrearPregunta from '$lib/components/comteacher/+crearPregunta.svelte';
	// listo
	import CrearQuiz from '$lib/components/comteacher/+crearQuiz.svelte';
	// listo (sin iniciar)
	import ListQuiz from '$lib/components/comteacher/+listQuiz.svelte';
	//listo
	import Login from '$lib/components/comambos/+login.svelte';
	//listoo
	import Loginfrom from '$lib/components/comambos/+loginfrom.svelte';
	//listo condicional
	import NewQuiz from '$lib/components/comteacher/+newQuiz.svelte';
	//listo
	import Players from '$lib/components/comteacher/+players.svelte';
	//listo
	import Room from '$lib/components/comteacher/+room.svelte';

	import Button from '$lib/components/comambos/+button.svelte';

	let user = { admin: false };

	function toggle() {
		user.admin = !user.admin;
	}
</script>


<div >

{#if user.admin}
    <Login src ="/teacher"></Login>
    <button class="botton" on:click={toggle}> Player </button>
{/if}

{#if !user.admin}

    <Login src ="/player"></Login>
    <button class="botton" on:click={toggle}> Teacher </button>
{/if}

</div>

