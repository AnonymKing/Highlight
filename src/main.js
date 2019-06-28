import Vue from 'vue'
import App from './App.vue'
import dp from '@/assets/js/shCore.js'

Vue.prototype.dp = dp.dp;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
