<script>
    export let titulo ="";
    export let src = " ";
</script>

<header  style="display: flex; justify-content: space-between;">
   <h2 style="color: aliceblue;">{titulo}</h2>
    {#if src !=" "}
    <img src={src} alt="supaer chevere " width="8%" height="100%" style="background-color: transparent;">
    {/if}
</header>