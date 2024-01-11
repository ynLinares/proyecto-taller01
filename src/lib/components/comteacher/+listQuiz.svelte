<script>
	import Head from '../comambos/+head.svelte';
	import QuizReady from '../comambos/+quizReady.svelte';
	import Button from '../comambos/+button.svelte';
    // Si no existen quiz guardados
    import NewQuiz from './+newQuiz.svelte';

	let preguntasQuiz = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'];
</script>

<!--
    si la base de datos no tiene quis guardados
    este componente debe aparacer primero

    <NewQuiz />
 -->
<Head titulo="List quis" />
<div>
	<QuizReady nombre="Quiz1" preguntas={preguntasQuiz} />
	<QuizReady nombre="Quiz2" preguntas={preguntasQuiz} />
	<div style = "width: 25%;">
		<Button nombre="Crear Quiz (+)" url="/teacher/crearQuiz" />
	</div>
</div>
