<script>
	import ImgeKahoot from './+imgeKahoot!.svelte';
	import Loginfrom from './+loginfrom.svelte';
	export let src = '';
</script>

<div class="centro">
	<ImgeKahoot />
	<Loginfrom action={src}/>
</div>
