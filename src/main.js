import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store  //配置store对象，配置完后各个组件都能看见store对象
}).$mount('#app')
