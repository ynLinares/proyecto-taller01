<script>
    import Head from "./+head.svelte";
    import Titulo from "./+titulo.svelte";
</script>

<Head titulo = "Pin ######### | Quiz"></Head>
<Titulo tituloChiquito = "Pregunta 1"/>
<div style="display: flex; width: 99%; justify-content: space-between;">
  <div class="circulo">
    <p style="text-align: center;">Tiempo</p>
  </div>
  <div class="circulo">
    <p style="text-align: center;">Respuesta</p>
  </div>
</div>

<div style="display: flex; justify-content: space-between;">
  <div style="width: 110px; height: 100px; display: flex; justify-content: space-between;">
    <img src="/assets/ImagenesProyecto/2.png" alt="supaer chevere" width="100%" height="100%" style="background-color:transparent">
    <div class="cuadro">
      <h2>Respuesta 1</h2>
    </div>
  </div>
  <div style="width: 100px; height: 100px; display: flex; justify-content: end;">
    <img src="" alt="supaer chevere" width="100%" height="100%" style="background-color:transparent">
    <div class="cuadro">
      <h2>Respuesta 2</h2>
    </div>
  </div>
</div>

<div style="display: flex; justify-content: space-between;">
  <div style="width: 100px; height: 100px; display: flex; justify-content: space-between;">
    <img src="ImagenesProyecto/4.png" alt="supaer chevere" width="100%" height="100%" style="background-color:transparent">
    <div class="cuadro">
      <h2>Respuesta 3</h2>
    </div>
  </div>
  <div style="width: 100px; height: 100px; display: flex; justify-content: end;">
    <img src="ImagenesProyecto/5.png" alt="supaer chevere" width="100%" height="100%" style="background-color:transparent">
    <div class="cuadro">
      <h2>respuesta 4</h2>
    </div>
  </div>
</div>


