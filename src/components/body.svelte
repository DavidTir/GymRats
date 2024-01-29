<script>
    import Trainingsblock from "./Trainingsblock.svelte";
    export let trainingNames = ['Training1', 'Training2', 'Training3'];
</script>

<style>
    #title{
        margin: 100px 0 100px 0;
        text-align: center;
    }
    h1{
        color: #FFFFFF;
        text-align: center;
        vertical-align: center;
    }
    body{
        background-image: url("../../Graphics/Background/Gym3.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    #content{
        background: #878C8F;
        width: 1300px;
        height: 1000px;
        position: absolute;
        left: 200px;
        opacity: 80%;
    }
</style>

<body>
<div id="content">
    <h1 id = 'title'>Deine Trainingspläne: </h1>
    {#each trainingNames as name}
    <Trainingsblock trainingName={name}/>
    {/each}
</div>
</body>