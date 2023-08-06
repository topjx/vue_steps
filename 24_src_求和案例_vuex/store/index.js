/*

// 该文件用于创建vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    //每次调用dispatch都会触发actions中的jia方法
    jia(context,value){
        //JIA大写和actions中的jia小写区分开
        //context是一个对象，里面有commit方法，可以触发mutations中的jia方法
        context.commit('JIA',value)
    }
}
// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        state.sum+=value
    }
}
// 准备state——用于存储数据
const state = {
    sum:0//当前的和
}
// 准备getters——用于将state中的数据进行加工
const getters = {}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})


*/