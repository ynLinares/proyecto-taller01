<!-- +layout.svelte 

	Permite generar un marco de 
	componentes o estilos
	que se repetiran en todos los 
	compoentes 
  -->

<script>
	// importacion de los estiolos ! 
	// solo se usa este codigo aqui 
	// y todas las paginas lo utilizaran 
	import '$lib/assets/Estilos.css';
</script>

<div>
	<!-- Slot define que resivira 
	componetes aqui  dentro de un 
	div -->
	<slot />
</div>
