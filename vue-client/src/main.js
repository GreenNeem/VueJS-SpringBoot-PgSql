import Vue from 'vue'
import Test from './test.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Test)
}).$mount('#app')


