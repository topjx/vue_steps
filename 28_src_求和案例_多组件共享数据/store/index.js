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
    },
    addOdd(context,value){
        console.log('actions中的addOdd被调用了');
        if(context.state.sum%2){
            context.commit('JIA',value)
        }
    },
    addWait(context,value){
        console.log('actions中的addWait被调用了');
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }

}
// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        console.log('mutations中的ADD被调用了');
        state.sum+=value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了');
        state.personList.unshift(value) //unshift()方法向数组的开头添加一个或更多元素，并返回新的长度。
    }
}
// 准备state——用于存储数据
const state = {
    sum:0,//当前的和
    school:"塔利班大学",
    subject:"前端",
    personList:[
        {id:'001',name:'张三'},
    ]
}
// 准备getters——用于将state中的数据进行加工
// 当state中的数据需要经过加工后再使用时，可以使用getters加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
