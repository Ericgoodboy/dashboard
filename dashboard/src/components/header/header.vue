<template>
    <div class="header">
        <div class="banner">
            DASH<span>BOARD</span>
        </div>
        <div class="menu">

        </div>
    </div>
</template>

<script>
    export default {
        name:"d-header"
    }
</script>

<style scoped>
.header{
    width: 100%;
    background: #2d3035;
    background: #2d3035;
    color: #8a8d93;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #34373d;
    z-index: 10;
    font-size: 20px;
    box-sizing: border-box;
}

.banner{
margin-left: 30px;
cursor: pointer;
}
.banner span{
    color: #933
}
</style>