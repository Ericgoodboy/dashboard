import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import VueRouter from 'vue-router';
import psummary from './components/pages/summary'
import pcontent from './components/pages/content'
import peditor from './components/pages/editorPage'
import 'mavon-editor/dist/css/index.css'
import toastRegistry from './toast/index'
Vue.use(toastRegistry)
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/pie'
// Vue.use(ECharts)
// Vue.component('chart', ECharts)
Vue.use(VueRouter);
Vue.use(mavonEditor)
const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes: [
    { path: '/summary', component: psummary },
    { path: '/content', component: pcontent },
    { path: '/editor', component: peditor },
    { path: '/', component: psummary }
  ]
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
