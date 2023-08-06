export default {
    namespaced:true,//开启命名空间,默认为false,用于解决不同模块的命名冲突问题
    actions:{
        addPersonWang(context, value){
            if(value.name.indexOf('王') === 0){
              context.commit('ADD_PERSON', value)
            }else{
              alert('添加的人必须姓王！')
              }
            },
          //连接服务器
          addPersonServer(context){
            console.log('actions中的addPersonServer被调用了');
            console.log(context);
            // axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
            //   response => {
            //     context.commit('ADD_PERSON', {id:nanoid(), name:response.data})
            //   },
            //   error => {
            //     alert(error.message)
            //   }
            // )
          }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了');
            state.personList.unshift(value) //unshift()方法向数组的开头添加一个或更多元素，并返回新的长度。
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
        ]
    },
    getters:{
        firstPersonalName(state){
            return state.personList[0].name
        }
    },
}