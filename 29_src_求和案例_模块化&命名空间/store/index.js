// 该文件用于创建vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

// 应用Vuex插件
Vue.use(Vuex)

// 创建并暴露store
// countAbout、personAbout调用使用的名字
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
