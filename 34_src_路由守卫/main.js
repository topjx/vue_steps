import Vue from 'vue'
import App from './App.vue'

// import vueResource from 'vue-resource'
// Vue.use(vueResource)

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 应用插件
Vue.use(VueRouter)

Vue.config.productionTip = false

// 创建vm
new Vue({
  render: h => h(App),
  router // 配置路由器
}).$mount('#app')

//./router/index.js

// 在 router 文件夹下的 index.js 文件中引入事先定义好的组件
// 通过 new VueRouter 创建一个路由器
// 路由器里面来配置路由：routes: [{...}]
// 路径：path: '/xxx'，用于和 to='/xxx' 匹配，如果不匹配，则内容不呈现。
// 组件：component: 组件名，路径映射到的组件
