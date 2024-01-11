<script>
	// @ts-nocheck

	import ImagePlayer from '../comambos/+imagePlayer.svelte';

	export let player = ['peito', 'juan', 'geraldine', 'jamon', 'nombre', 'otro'];
</script>

<div class="grid-container">
	{#each player as name}
		<ImagePlayer nombre={name} />
	{/each}
</div>
