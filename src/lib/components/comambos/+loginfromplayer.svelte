<script>
	// Importa las dependencias necesarias
	import ImgeKahoot from './+imgeKahoot!.svelte';

	// Declara las variables necesarias
	let name = '';
	let pin = '';

	// Define una función asíncrona para manejar el envío del formulario
	async function handleSubmit() {
		// Realiza una solicitud POST a la ruta '/loginPlayer'
		const response = await fetch('?/loginPlayer', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			// Envia el nombre y el pin como cuerpo de la solicitud
			body: new URLSearchParams({ name, pin })
		});
		// Imprime la respuesta en la consola
		console.log('Response:', response);
		// Convierte la respuesta en un objeto JSON
		const responseData = await response.json();
		// Imprime los datos de la respuesta en la consola
		console.log('Response Data:', responseData);

		// Parsea la propiedad 'data' como JSON
		const data = JSON.parse(responseData.data);
		console.log('Data:', data);

		// Accede a los elementos del array
		const statusObject = data[0];
		const statusCode = data[1];
		const redirectUrl = data[2];
		const player = data[3];

		// Si el tipo de respuesta es 'success' y el código de estado es '302'
		if (responseData.type === 'success' && statusCode === '302') {
			console.log('entro');
			// Almacena el nombre en el almacenamiento local
			localStorage.setItem('name', JSON.stringify(name));
			// Redirige a la URL de redirección
			window.location.href = redirectUrl;
		} else {
			// Imprime un error en la consola
			console.error('Inicio de sesión fallido');
		}
	}
</script>

<!-- Muestra la imagen de Kahoot y el formulario de inicio de sesión -->
<div class="centro">
	<ImgeKahoot />
	<div class="cuadro">
		<form on:submit={handleSubmit}>
			<!-- Campo de entrada para el pin -->
			<input
				name="pin"
				id="pin"
				type="text"
				class="pin"
				placeholder="Pin"
				autocomplete="off"
				required
				bind:value={pin}
			/>
			<!-- Campo de entrada para el nombre -->
			<input
				name="name"
				id="name"
				type="text"
				class="pin"
				placeholder="Nombre de Usuario"
				autocomplete="off"
				required
				bind:value={name}
			/>
			<!-- Botón de envío del formulario -->
			<button class="botton" type="submit">Ingresar</button>
		</form>
	</div>
</div>

<!-- Define los estilos para el cuadro, el pin y el botón -->
<style>
	.cuadro {
		width: 50%;
	}

	.pin {
		width: 100%;
		padding: 10px;
		border: 1px solid #000;
		border-radius: 5px;
		color: #000;
	}

	.botton {
		width: 100%;
		height: 40px;
		border: 1px solid #000;
		border-radius: 5px;
		background-color: #ffffff;
		color: #000;
		font-size: 18px;
		font-weight: bold;
	}
</style>