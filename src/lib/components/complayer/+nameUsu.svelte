<script>
import '$lib/assets/Estilos.css';
  let nombreJugador;



</script>

<main class="centro">
  <h1>
    <img src="ImagenesProyecto/Kahoot_Logo.svg.png" alt="Imagen1" style="background-color: transparent; width: 252px;">
  </h1>

  <div class="alinea">
    <form class="cuadro" action="login.php" method="post">
      <input
        class="pin"
        type="text"
        name="pin"
        id="pin"
        placeholder="Nombre (apodo) del jugador"
        width="100%"
      />
      <button class="botton">¡Iniciar!</button>
    </form>
  </div>
</main>
