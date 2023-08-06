//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Messages";
import MessageDetail from "../pages/MessageDetail";

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[ //通过children配置子级路由
                {
                    path:'news', //此处没有 /
                    component:News
                },
                {
                    path:'message', //此处没有 /
                    component:Message,
                    children:[
                        {
                            name:'MessageDetail', //命名路由  通过name跳转 不需要写全部路径 不需要加 /
                            path:'detail', //此处没有 /  跳转打开这个路由时需要写全部路径并带/ /home/message/detail
                            component:MessageDetail
                        }
                    ]
                }
            ]
        }
    ]
});