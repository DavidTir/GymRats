<script>
    let excerciseDetails = ['Bench Press', 15, '50kg', 10];
    import addImage from '$lib/graphics/add.png'
</script>
<style>
    .table{
        display: flex;
        justify-content: space-around;
    }
    .add{
        position: relative;
        width: 50px;
        left: 740px;
    }
    .excDet{
        text-align:center;
        width: 189px;
        height: 64px;
        background: rgba(54, 57, 59, 0.60);
        border: 2px white solid;
    }
</style>

<div class="table">
    <div class="category">Übung</div>
    <div class="category">Serien</div>
    <div class="category">Gewicht</div>
    <div class="category">Dauer</div>
</div>
<div class="table">
{#each excerciseDetails as excDet}
    <div style="width: 100%; height: 100%; justify-content: flex-start; align-items: flex-start; gap: 1px; display: inline-flex">
        <div class = "excDet">{excDet}</div>
    </div>
{/each}
</div>
<button class="add">
    <img src = {addImage} alt = "Add">
</button>