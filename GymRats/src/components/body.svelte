<script>
    import Trainingsblock from "./Trainingsblock.svelte";
    export let names = ["test1", "test2", "test3", "test4"];
</script>

<style>
    #title{
        margin: 100px 0 100px 0;
    }
    h1{
        color: #FFFFFF;
        text-align: center;
        vertical-align: center;
    }
    body{
        background-image: url("https://w.forfun.com/fetch/3b/3be10e704076a6d8608dea14eefea529.jpeg");
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
    {#each names as name}
    <Trainingsblock trainingName={name}/>
    {/each}
</div>
</body>