<template>
    <div>
        <v-tcontainer>
            <div class="outer"> <v-ttable tname="入站统计" :header="header"></v-ttable></div>
        </v-tcontainer>
    </div>
</template>

<script>
    import tableContainerVue from '../tables/tableContainer.vue';
    import listtableVue from '../tables/changeTable.vue';
    export default {
        name:"v-content",
        data(){
            return{
                header:[]
            }
        },
        components:{
            "v-tcontainer":tableContainerVue,
            "v-ttable":listtableVue,
        }
    }
</script>

<style scoped>
.outer{
    width: 80%;
    margin: 0 auto;
}

</style>