<script>
    import ImgeKahoot from './+imgeKahoot!.svelte';
    import Loginfrom from './+loginfrom.svelte';
	export let nombre = " ";
	export let pin = " ";

</script>

<div class="centro">
    <ImgeKahoot />
    <Loginfrom nombre ={nombre}  pin ={pin}/>
</div>

