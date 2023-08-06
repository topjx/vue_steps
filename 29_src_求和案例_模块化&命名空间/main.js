import Vue from 'vue'
import App from './App.vue'

// import vueResource from 'vue-resource'
// Vue.use(vueResource)

// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // 配置store
}).$mount('#app')
