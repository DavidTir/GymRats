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
    font-family: Jost,serif;
    font-weight: 800;
    word-wrap: break-word;
    display: grid;
    margin: 10px;
}
#dropdown{
    position: absolute;
    right: 500px;
    vertical-align: center;
}
</style>
    <div class="wrapper">· {trainingName}
        <button id='dropdown' on:click={SwitchToggle}>
            <img src = "../../Graphics/Icons/" alt = "Dropdown Icon">
        </button>
    </div>
{#if expandToggle}
    <div class = 'wrapper'><ExcerciseBlock/></div>
{/if}




