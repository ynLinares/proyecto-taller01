<script>
	import { io } from 'socket.io-client';
	import PlayAdmin from '$lib/components/comteacher/+playAdmin.svelte';

	let socket = io();
	socket.on('letterplayer', (letter) => {
		console.log(letter);
	});
</script>

<PlayAdmin />
