<template>
    <div class="ctable clearfix">
        <div class="t-name">{{ tname }}</div>
        <div class="t-body">
            <div class="t-header">
                <ul>
                    <li :style="{ width:hwidth }" v-for="(item,index) in theader" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="tbody clearfix">
                <div  class="line" v-for="item in tbody" :key="item.id">
                    <ul>
                        <li :style="{ width:hwidth }" v-for="(itemidata,index) in item.data" :key="index">
                            {{ itemidata }}
                        </li>
                    </ul>
                </div >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ctable",
        props: {
            tname: {
                type: String,
                default: "表格名"
            },
            
        },
        
        data(){
            return{
                theader:["id","title","md","top","saw","author"],
                tbody:[
                    {data:["id","title","md","top","saw","author"]},
                    {data:["id","title","md","top","saw","author"]},
                    {data:["id","title","md","top","saw","author"]},
                    {data:["id","title","md","top","saw","author"]},
                    {data:["id","title","md","top","saw","author"]}
                ]
            }
        },
        computed: {
            hwidth() {
                return 100/this.theader.length+"%" 
            }
        },
    }
</script>

<style scoped>
ul{
    margin: 0%;
    padding: 0%;
    border: 0;
    list-style: none;
}
li{
margin: 0%;
    padding: 0%;
    border: 0;
    list-style: none;
}
.ctable{
    width: 80%;
    background: #222;
    opacity: .9;
    margin:0 auto;
    box-shadow: 0 0 5px #789;
}
.t-name{
    height: 40px;
    width: 100%;
    text-align: center;
    background: #2d3035;
    line-height: 40px;
      color:lightcyan;

}
.t-header li{
    float: left;
    height: 30px;
    text-align: center;
    border:1px solid #333;
    box-sizing: border-box;
    line-height: 30px;
    cursor: pointer;
    color: #aaa;
    border-bottom: #999 1px solid;

}
.t-header li:hover{
    text-shadow: 0 0 3px #369;
}
.line li{
    float: left;
    height: 30px;
    text-align: center;
    border:1px solid #333;
    box-sizing: border-box;
    line-height: 30px;
    cursor: pointer;
}
/* .line:hover{
    /* border: 1px solid #fff; */
/* } */ 
</style>