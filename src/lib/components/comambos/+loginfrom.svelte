<script>
	import { enhance } from '$app/forms';
	export const admin = true;

	let name = '';
	let password = '';
	import { goto } from '$app/navigation';

async function handleSubmit() {
  const response = await fetch('?/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ name, password })
  });
  console.log('Response:', response);
  const responseData = await response.json();
  console.log('Response Data:', responseData);

  // Parse the 'data' property as JSON
  const data = JSON.parse(responseData.data);
  console.log('Data:', data);

  // Access the elements of the array
  const statusObject = data[0];
  const statusCode = data[1];
  const redirectUrl = data[2];

  if (responseData.type === 'success' && statusCode === '302') {
    console.log('entro');
    window.location.href = redirectUrl;
  } else {
    console.error('Inicio de sesión fallido');
  }
}
	// vercion desde el cliente
	//   async function handleSubmit(event) {
	//     event.preventDefault();

	//     const formData = new FormData(event.target);

	//     const response = await fetch('?/login', {
	//       method: 'POST',
	//       body: formData,

	//     });
	//  console.log(response)
	//     const data = await response.json();
	//     console.log(data);
	//     if (data.type ==='success') {
	// 		console.log("funciona");
	//      	 goto('/teacher');
	//     } else {
	//       // Manejar el error de inicio de sesión...
	//       console.log("nofunciona");
	//     }
	//   }
</script>

<div class="cuadro">
	<form method="POST" action="?/login" use:enhance on:submit={handleSubmit}>
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
