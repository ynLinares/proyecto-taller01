<script>
    import { io } from "socket.io-client";
	import CrearQuiz from "$lib/components/comteacher/+crearQuiz.svelte";

    let socket = io();
    socket.on('letterplayer', (letter) =>{
        console.log(letter);
    } )

</script>

<CrearQuiz />