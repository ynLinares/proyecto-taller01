<!-- Componente inicio  -->
<script>
	// Compoentne button crea un 
	// botton con una url nombre 
	// y un estilo 
    import Button from '../comambos/+button.svelte';
	// Resive name , url,  button, 
	// esto permite reutulizar el comonente
	// Como jugador y como anfitrion 
    export let name = '';
    export let url ='';
    export let button='';

</script>

<!-- Main del componente  -->
<main style=" padding: 50px;">
	<div class="centro">
		<!-- Imagen por defecto -->
		<img src="/ImagenesProyecto/2.png" 
			 alt="Imagen1" 
			 style="background-color: transparent;" />
		<!-- h1 que resive el nombre y lo muestra  -->
		<h1
			style="margin: 0px; 
				font-size: 2.5rem; 
				font-family: inherit; 
				line-height: normal; 
				color: rgb(255, 255, 255); 
				font-weight: bold;"
		>
			{name}
		</h1>
		<!-- Comonenete button 
		 con nombre y url -->
		<Button 
			nombre={button} 
			url={url}>
		</Button>
	</div>
</main>
