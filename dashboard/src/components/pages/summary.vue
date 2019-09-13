<template>
    <div class="summary">
        <v-tcontainer>
            <div class="outer"> <v-ttable tname="入站统计"></v-ttable></div>
            <div class="outer"> <v-ttable tname="入站统计"></v-ttable></div>
            <div class="outer"> <v-pie></v-pie></div>
            <div class="outer"> <v-pie></v-pie></div>
        </v-tcontainer>
    </div>
</template>

<script>
    import tableContainerVue from '../tables/tableContainer.vue';
    import visitortableVue from '../tables/listtable.vue';
    import pie from '../tables/pietable.vue';

    export default {
        name:"v-summary",
        components: {
            "v-tcontainer":tableContainerVue,
            "v-ttable":visitortableVue,
            "v-pie":pie
        },
    }
</script>

<style scoped>
    .summary{
        width: 90%;
        margin:0 auto;
    }
    .outer{
        width:50%;
        margin: 0%;
        padding: 0%;
        float: left;
    }
</style>