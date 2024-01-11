<script>
	import Imagep from "./+imagep.svelte";

	export let nombre = '';
</script>

<div style="width: 100px; height: 100px; background-color: transparent; display: flex;">
	<Imagep {nombre} />
	<div class="cuadro">
        <h4>{nombre}</h4>
    </div>
</div>
