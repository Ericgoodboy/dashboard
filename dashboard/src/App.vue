<template>
  <div id="app">
    <v-header></v-header>
    <v-leftmenu>
    </v-leftmenu>
    <v-star></v-star>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import star from './components/background/star.vue'
import leftmenuVue from './components/letfmenu/leftmenu.vue';
export default {
  name: 'app',
  components: {
    "v-header":header,
    'v-star':star,
    "v-leftmenu":leftmenuVue
  }
}
</script>

<style>
body{
  margin: 0%;
  padding: 0;
  border:0;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  .clearfix {
    height: 1%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
