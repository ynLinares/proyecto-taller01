<script>
	import Head from './+head.svelte';
	import QuizReady from './+quizReady.svelte';
	import Button from './+button.svelte';

	let preguntasQuiz = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'];
</script>

<Head titulo="List quis" />
<div>
	<QuizReady nombre="Quiz1" preguntas={preguntasQuiz} />
	<QuizReady nombre="Quiz2" preguntas={preguntasQuiz} />
	<div style = "width: 25%;">
		<Button nombre="Crear Quiz (+)" url="/teacher/crearQuiz" />
	</div>
</div>
