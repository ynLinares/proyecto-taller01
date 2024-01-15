<script>
	import '$lib/assets/Estilos.css';
</script>

<div>
	<!-- navegador de teacher -->
	<nav class="cuadro">
		<a href="/" style="color: black;">Login</a>
		<a href="/teacher" style="color: black;">teacher</a>
		<a href="/teacher/crearQuiz" style="color:black;">Crear quiz</a>
		<a href="/teacher/crearPregunta" style="color:black;">Crear Pregunta</a>
		<a href="/teacher/room" style="color:black;">Room</a>
	</nav>
    <!-- navegador usuario  -->
	<nav class="cuadro">
		<a href="/player" style="color: black;">Player</a>
		<a href="/player/usuario" style="color: black;">usuario</a>
		<a href="/player/loby" style="color: black;">loby</a>
	</nav>

	<slot />
</div>
