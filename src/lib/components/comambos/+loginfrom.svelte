<script>
	import { enhance } from '$app/forms';
    export const admin =true;

	let username = '';
	let password = '';
      import { goto } from '$app/navigation';

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch('?/login', {
      method: 'POST',
      body: formData,

    });
 console.log(response)
    const data = await response.json();
    console.log(data);
    if (data.type==='success') {
      goto('/teacher');
    } else {
      // Manejar el error de inicio de sesión...
      console.log("nofunciona");
    }
  }
</script>

<div class="cuadro">
	<form on:submit={handleSubmit} method="POST" action="?/login" use:enhance>
		<input
			name="name"
			id="name"
			type="text"
			class="pin"
			placeholder="Nombre de Usuario"
			autocomplete="off"
			required
		/>
		<input
			name="password"
			id="password"
			type="password"
			class="pin"
			placeholder="Password"
			required
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
