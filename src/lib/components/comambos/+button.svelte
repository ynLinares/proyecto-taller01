<script>
    import {goto} from "$app/navigation";
    export let nombre ="";
    export let url =" ";
</script>

<div >
    <button
        class="botton"
         on:click={() => goto(url)}>
            {nombre}
    </button>
</div>