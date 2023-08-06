//开启命名空间后，组件中读取 state 数据
//方式一：自己读取数据
// this.$store.state.personAbout.personlist
// //方式二：借助 mapState 读取
// ...mapState('countAbout', ['sum', 'school', 'subject'])


//开启命名空间后，组件中读取 getters 数据
// //方式一：自己直接读取
// this.$store.getters['personAbout/firstPersonName'] //key被命名空间分割，包装成personAbout/firstPersonName，查看vueDevtools可以直观看到
// //方式二：借助 mapGetters 读取
// ...mapGetters('countAbout', ['bigSum'])

//开启命名空间后，组件中调用 dispatch
// //方式一：自己直接调用 dispatch
// this.$store.dispatch('personAbout/addPersonWang', person)
// //方式二：借助 mapActions 调用
// ...mapActions('countAbout', {addOdd: 'addOdd', addWait: 'addWait'})


//开启命名空间后，组件中调用 commit
// //方式一：自己直接调用 commit
// this.$store.commit('personAbout/ADD_PERSON', person)
// //方式二：借助 mapMutations 调用
// ...mapMutations('countAbout', {add: 'ADD', sub: 'SUB'})

//https://zahuopu.blog.csdn.net/article/details/124897391

// 可以 const count = { ... }，然后 export default count
export default {
    namespaced: true,//开启命名空间,默认为false,用于解决不同模块的命名冲突问题
    actions: {
        //每次调用dispatch都会触发actions中的jia方法
        jia(context, value) {
            //JIA大写和actions中的jia小写区分开
            //context是一个对象，里面有commit方法，可以触发mutations中的jia方法
            context.commit('JIA', value)
        },
        jian(context, value) {
            //JIA大写和actions中的jia小写区分开
            //context是一个对象，里面有commit方法，可以触发mutations中的jian方法
            context.commit('JIAN', value)
        },
        addOdd(context, value) {
            console.log('actions中的addOdd被调用了');
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        addWait(context, value) {
            console.log('actions中的addWait被调用了');
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations中的ADD被调用了');
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了');
            state.sum -= value
        },
    },
    state: {
        sum: 0,//当前的和
        school: "塔利班大学",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}