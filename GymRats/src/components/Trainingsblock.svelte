<script>
    export let trainingName = ""
    export let toggle = false

    function SwitchToggle(){
        toggle = !toggle
    }
</script>
<style>
.wrapper{
    padding: 10px;
    background-color: #36393B;
    opacity: 0.6;
    color: white;
    font-size: 36px;
    font-family: Jost;
    font-weight: 800;
    word-wrap: break-word;
    display: flex;
    margin: 10px;
}

</style>




    <div class="wrapper">· {trainingName}
        {#if toggle}
            <p>Table</p>
        {/if}
    </div>
    <img style="width: 20px; height: 22.45px; left: 851px; top: 21px; position: absolute" src="https://via.placeholder.com/20x22" />

    <button on:click={SwitchToggle}>
        {toggle === true ? 'hide' : 'show'}
    </button>


