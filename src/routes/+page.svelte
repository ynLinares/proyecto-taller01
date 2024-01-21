<!-- Pagina principal 
Los usuarios eligen si ser anfitrion o jugador  -->
<script>
	// Componete inicio
	import Inicioo from '$lib/components/comambos/+inicioo.svelte';
</script>


<div
	style="	display: flex;
            justify-content: center;
	        align-items: center;"
>
	<!-- Genera una imagen y un boton
	direcciona a la pagina de cada uno   -->
	
	<Inicioo 
		name="Jugador" 
		url="/player" 
		button="Adivina la palabra " />
	<Inicioo 
		name="Anfitrion" 
		url="/teacher" 
		button="Elijes la palabra" />
</div>
