<script>
	import { io } from 'socket.io-client';

    export let mensaje ="sin respuesta";

	const socket = io();

	// Emitir 'eventFromClient'
	socket.emit('eventFromClient', 'A');

	// Emitir 'anotherEventFromClient'
	socket.emit('anotherEventFromClient', 'B');

	socket.on('eventFromServer', (message) => {
		console.log('mensaje recibido ' + message);
        mensaje=message; // Debería imprimir el mensaje enviado desde el servidor
	});
	socket.on('anotherEventFromServer', (message) => {
		console.log(message); // Debería imprimir el mensaje enviado desde el servidor
	});
	import ImgeKahoot from './+imgeKahoot!.svelte';
	import Loginfrom from './+loginfrom.svelte';
	import Loginfromplayer from './+loginfromplayer.svelte';
	export let admin = true;
</script>

<div class="centro">
    <p>{mensaje}</p>
	<ImgeKahoot />
	{#if admin}
		<Loginfrom />
	{/if}
	{#if !admin}
		<Loginfromplayer />
	{/if}
</div>
