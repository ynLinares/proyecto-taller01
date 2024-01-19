<script>
	import ImgeKahoot from './+imgeKahoot!.svelte';
	import Loginfrom from './+loginfrom.svelte';
	import Loginfromplayer from './+loginfromplayer.svelte';
	export let admin;
</script>

<div class="centro">
	<ImgeKahoot />
	{#if admin}
		<Loginfrom />
	{/if}
	{#if !admin}
		<Loginfromplayer />
	{/if}
</div>
