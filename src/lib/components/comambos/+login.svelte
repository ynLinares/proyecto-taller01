<script>
	import ImgeKahoot from './+imgeKahoot!.svelte';
	import Loginfrom from './+loginfrom.svelte';
	export let admin = true;
</script>

<div class="centro">
	<ImgeKahoot />
	<Loginfrom {admin} />
</div>
