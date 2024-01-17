<script>
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import Imagep from '../comambos/+imagep.svelte';
	export let players;
	console.log("player dentro del redy " + players);
	let player;
	if (typeof window !== 'undefined') {
		player = JSON.parse(window.localStorage.getItem('name'));
	}
	console.log('player = ' + player);
	export let nombre = player;
</script>

<main style="width: 100%; border: 5px solid midnightblue; gap: 28px">
	<div class="centro">
		<Imagep />
		<p>{nombre}</p>
		<div class="grid-container">
			{#each players as play}
				<ImagePlayer nombre={play.name} />
			{/each}
		</div>
		<div style="background-color: aliceblue; border: 3px solid midnightblue">
			<h1>Listo</h1>
		</div>
	</div>
</main>
