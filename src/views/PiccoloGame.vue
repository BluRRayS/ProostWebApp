<template>
    <div class="game">
        <div>
            <h1>question</h1>
        </div>
        <div class="progressbar">progressbar</div>
    </div>
</template>

<script>
    export default {
        name:"PiccoloGame"
    }
</script>

<style scoped>
.game{
    width: 100vw;
    height: 100vh;
    background-color: gray;
     display: flex;
    justify-content: center;
    align-items: center;
}

.progressbar{
    position: fixed;
    width:100%;
    background-color:  green;
    height: 5px;
    bottom: 0px;
}

</style>