import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PIE from '@/components/PIE';
// import ScatterTest from '@/page/ScatterTest';
import EffectScatter from '@/components/EffectScatter';
import Scatter from '@/components/Scatter';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/pie',
      name: 'PIE',
      component: PIE
    },{
      path:'/scatter',
      name: 'Scatter',
      component: Scatter
    },{
      path:'/effect',
      name: 'EffecrScatter',
      component: EffectScatter
    }
  ]
})
