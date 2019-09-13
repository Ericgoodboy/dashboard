<template>
  <div class="app-toast"
       v-if="isShow"
       :class="{'info': type=== 'info','success': type=== 'success','wraning': type=== 'wraning','danger': type=== 'danger'}">{{text}}</div>
</template>
<style scoped>
.app-toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ccc;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  transition: .8s;
}
.info {
  background: #00aaee;
  z-index: 100000;
}
.success {
  background: #00ee6b;
  z-index: 100000;
}
.wraning {
  background: #eea300;
  z-index: 100000;
}
.danger {
  background: #ee000c;
  z-index: 100000;
}
</style>
