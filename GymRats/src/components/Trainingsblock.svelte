<script>
    import ExcerciseBlock from "./ExcerciseBlock.svelte";

    export let trainingName = ""
    export let expandToggle = false

    function SwitchToggle(){
        expandToggle = !expandToggle;
    }
</script>
<style>
.wrapper{
    padding: 10px;
    width: 800px;
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
        <button on:click={SwitchToggle} >
            <img src = "Details.png">
        </button>
    </div>
{#if expandToggle}
    <div class = 'wrapper'><ExcerciseBlock  /></div>
{/if}




