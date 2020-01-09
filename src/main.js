import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import{ router } from './router/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

console.log(vm) // eslint-disable-line no-console
