<script>
	import Player from '$lib/components/complayer/+player.svelte';
	import { io } from 'socket.io-client';
	const socket = io();
	let name;
	if (typeof window !== 'undefined') {
		name = JSON.parse(window.localStorage.getItem('name'));
	}
	socket.emit('newPLayer', name);
	console.log('name dentopr de player ' + name);

</script>

<Player />