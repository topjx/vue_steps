//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Messages";
import MessageDetail from "../pages/MessageDetail";

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            meta: { //配置路由的元信息
                isAuth: true,
                title: 'about'
            }
        },
        {
            path: '/home',
            component: Home,
            children: [ //通过children配置子级路由
                {
                    path: 'news', //此处没有 /
                    component: News,
                    meta: { //配置路由的元信息
                        isAuth: true,
                        title: 'news'
                    },
                    beforeEnter: (to, from, next) => { //路由独享守卫
                        console.log('独享路由守卫', to, from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next();
                            } else {
                                alert('学校名不对，无权限查看');
                            }
                        } else {
                            next();
                        }
                    }
                },
                {
                    path: 'message', //此处没有 /
                    component: Message,
                    children: [
                        {
                            name: 'MessageDetail', //命名路由  通过name跳转 不需要写全部路径 不需要加 /
                            // path:'detail', //此处没有 /  跳转打开这个路由时需要写全部路径并带/ /home/message/detail
                            path: 'detail/:id/:title', //使用占位符声明接收params参数 需要配合对应的router-link使用、查询参数使用params时不需要声明接收
                            component: MessageDetail,
                            // props:{'a':1,'b':2} //通过props映射自定义属性  需要组件中有对应的props声明接收  props:['a','b'],  使用的少，因为传递的是死数据。
                            props: true, //映射params参数为props传递给路由组件  传递的是动态数据 推荐使用,需要组件中有对应的props声明接收 props:['a','b','id','title'],
                            // props(route){ //函数模式  route是当前路由对象 需要组件中有对应的props声明接收 props:['a','b','id','title'],
                            //     return {id:route.params.id,title:route.params.title}
                            // }


                            // path、name的用法
                            // <!-- 跳转路由并携带query参数，to的字符串写法,查询参数使用query -->
                            // <!-- <router-link :to="'/home/message/detail?id=' + item.id + '&title=' + item.title">{{ item.title }}</router-link> -->

                            // <!-- 跳转路由并携带query参数，to的对象写法 -->
                            // <!-- <router-link :to="{path: '/home/message/detail', query: {id: item.id, title: item.title}}">{{ item.title }}</router-link> -->

                            // <!-- router-link标签的to属性可以是一个对象，对象中的name属性值是路由的名称，query属性值是一个对象，对象中的id属性值是消息的编号，title属性值是消息的标题 -->
                            // <!-- <router-link :to="{name: 'MessageDetail', query: {id: item.id, title: item.title}}">{{ item.title }}</router-link> -->

                            // <!-- 跳转并携带params参数，to的字符串写法 查询参数使用params-->
                            // <!-- <router-link :to="`/home/message/detail/${ item.id }/${ item.title }`">{{ item.title }}</router-link> -->

                            // <!-- 跳转并携带params参数，to的对象写法 -->
                            // <router-link :to="{name: 'MessageDetail', params: {id: item.id, title: item.title}}">{{ item.title }}</router-link>



                            // props的三种写法
                            // props:{'a':1,'b':2}
                            // 第一种写法：props 的值为对象。该对象中的所有 key-value 都会以 props的形式传给 Detail 组件。
                            // 注意：使用的少，因为传递的是死数据。
                            // 
                            // props:true
                            // 第二种写法，值为布尔值。若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给 Detail 组件。
                            // 注意：只能传递 params 参数，不会传递 query 参数。
                            // 
                            // props(route)
                            // props 的第三种写法，值为函数。该函数返回的对象中每一组 key-value 都会通过 props 传给 Detail 组件。
                            // 该写法既能传递 params 参数，也能传递 query 参数。
                            // 
                            // 三种写法都需要组件中有对应的props声明接收 props:['a','b','id','title'],
                        }
                    ]
                }
            ]
        }
    ]
});

// 全局前置路由守卫---初始化时被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next();
        } else {
            alert('学校名不对，无权访问！');
        }
    } else {
        next();
    }
    // next();
    // next(false); //不跳转
    // next('/about'); //跳转到指定路由
    // next({path:'/about'}); //跳转到指定路由
    // next({name:'About'}); //跳转到指定路由
    // next(); //放行
});


// 全局后置路由守卫---初始化时被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || 'vue项目';
});

export default router