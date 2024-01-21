<!-- Comonete login 
	 Contiene el from 
	 y una imagen 
	 -->
<script>
	
	// Componete IamgenKahoot 
	import ImgeKahoot from './+imgeKahoot!.svelte';

	// Variables usados por el formulario  
	let name = '';
	let password = '';

	// Funcion asincrona 
	// solicita una respuesta del servidor 
	// con em letodo post a la funcion /login 
	// 
	async function handleSubmit() {

			// Solicitud post 
			// devuelve un objeto
			const response = await fetch('?/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({ name, password })
			});

			// Bandera para verificar response 
			// console.log('Response:', response);
			
			const responseData = await response.json();
			console.log('Response Data:', responseData);

			if (responseData.data) {
				// Parse the 'data' property as JSON
				const data = JSON.parse(responseData.data);
				console.log('Data:', data);

				// Access the elements of the array
				const statusCode = data[1];
				console.log(statusCode)
				const redirectUrl = data[2];
				if (responseData.type === 'success' && statusCode === '302') {
					console.log('entro');
					window.location.href = redirectUrl;
				} 
				if(statusCode === "401"){
					alert('Inicio de sesión fallido');
				}
			} else {
				alert('Inicio de sesión fallido');
			}

	}
</script>

<div class="centro">
	<ImgeKahoot />
	<div class="cuadro">
		<form method="POST" action="?/login" on:submit={handleSubmit}>
			<input
				name="name"
				id="name"
				type="text"
				class="pin"
				placeholder="Nombre"
				autocomplete="off"
				required
				bind:value={name}
			/>
			<input
				name="password"
				id="password"
				type="password"
				class="pin"
				placeholder="Password"
				required
				bind:value={password}
			/>
			<button class="botton" type="submit">Ingresar</button>
		</form>
	</div>
</div>

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
