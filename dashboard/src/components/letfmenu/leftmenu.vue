<template>
    <div class="leftmenu">
        <div class="items">
            <ul>
                <li class="item" v-for="item in items" :key="item.id">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"b-leftmenu",
        data(){
            return{
                items:[
                    {
                        name:"mayeyeBlog",id:1,
                    },
                    {
                        name:"mayeyeBlog",id:2
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.leftmenu{
    width:160px;
    height:500px;
    position: absolute;
    left: -160px;
    top:80px;
    background: #2d3035;
    border-radius: 0 0px 10px 0px;
    transition: .5s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.320, 1);
}
.leftmenu:before{
    content: "项目";
    position: absolute;
    width: 30px;
    height: 85px;
    right:-30px;
    top: 0%;
    background: #2d3035;
    border-radius: 0 10px 10px 0px;
    font-size: 20px;
    padding-left: 5px;
    line-height: 40px;
    text-orientation: upright;
    box-sizing: border-box;
}
.leftmenu:hover{
    left: 0;
}
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
.items{
    width:100%;
    margin:30px auto;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #999;
    letter-spacing: 3px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.item{
    margin: 0%;
    padding: 0%;
    cursor: pointer;
    -webkit-user-select: none;
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.item:hover{
    text-shadow: 0 0 2px #389f;
    box-shadow: 0 0 2px #389f;
}
</style>