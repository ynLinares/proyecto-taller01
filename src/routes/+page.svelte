<!-- Pagina principal 
Los usuarios eligen si ser anfitrion o jugador  -->
<script>
	// Importa el componente Inicioo desde la ruta especificada
	import Inicioo from '$lib/components/comambos/+inicioo.svelte';
</script>

<div
	style="	display: flex;
            justify-content: center;
            align-items: center;"
>
	<!-- Este div tiene un estilo CSS que lo centra en la pantalla y dispone sus hijos en una fila -->

	<!-- Genera una imagen y un boton
    direcciona a la pagina de cada uno   -->

	<!-- Instancia del componente Inicioo con las propiedades name, url y button. 
         Este componente representa la opción de ser un Jugador. Al hacer clic en el botón, el usuario será redirigido a "/player" -->
	<Inicioo name="Jugador" url="/player" button="Adivina la palabra " />
	<Inicioo name="Anfitrion" url="/teacher" button="Eliges la palabra" />
</div>
