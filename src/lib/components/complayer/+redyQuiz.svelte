<script>
	import ImagePlayer from '../comambos/+imagePlayer.svelte';
	import Imagep from '../comambos/+imagep.svelte';

	export let nombre = ' nombre';
	export let players = ['geraldine', 'aquiles', 'cesario', 'luci', 'jesus', 'severus'];
</script>

<main style="width: 100%; border: 5px solid midnightblue; gap: 28px">
	<div class="centro">
		<Imagep />
        <p>{nombre}</p>
		<div class="grid-container">
			{#each players as name}
				<ImagePlayer nombre={name} />
			{/each}
		</div>
		<div style="background-color: aliceblue; border: 3px solid midnightblue">
			<h1>Listo</h1>
		</div>
	</div>
</main>
