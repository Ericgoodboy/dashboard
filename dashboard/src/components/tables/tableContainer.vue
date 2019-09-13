<template>
    <div class="c-container clearfix">
        <div class="c-header">
            {{ subjectName }}
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"c-table",
        data(){
            return{
                subjectName:"Subject"
            }
        }
    }
</script>

<style scoped>
    .c-container{
        width: 80%;
        margin: 30px auto;
        background: #333;
        /* opacity: .8; */
        color: #7777;
        padding-bottom: 24px;
        min-height: 80vh;
    }
    .c-header{
        width: 100%;
        height: 55px;
        background: #222;
        line-height: 55px;
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        opacity: 1;
        user-select: none;
        margin-bottom: 24px;
          color:lightcyan;

    }

</style>