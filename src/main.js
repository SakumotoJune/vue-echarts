// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/scatter'

Vue.component('v-chart', ECharts);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
