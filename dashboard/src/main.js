import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import psummary from './components/pages/summary'
import pcontent from './components/pages/content'
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/pie'
// Vue.use(ECharts)
// Vue.component('chart', ECharts)
Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes: [
    { path: '/summary', component: psummary },
    { path: '/content', component: pcontent },
    { path: '/', component: psummary }
  ]
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
