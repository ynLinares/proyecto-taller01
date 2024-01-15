<script>
	import Login from '$lib/components/comambos/+login.svelte';

	let user = { admin: true };

	function toggle() {
		user.admin = !user.admin;
	}
</script>

<div>
	{#if user.admin}
		<Login admin= {user.admin}></Login>
		<button class="botton" on:click={toggle}> Player </button>
	{/if}

	{#if !user.admin}
		<Login admin= {user.admin}></Login>
		<button class="botton" on:click={toggle}> Teacher </button>
	{/if}
</div>
