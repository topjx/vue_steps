## 全局路由守卫
1.分类
```
1.全局守卫
2.独享守卫
3.组件内守卫
```

### 全局守卫
`示例在router中`
1.作用
```
1.全局路由守卫分为`全局_前置路由守卫` 和 `全局_后置路由守卫`
2.对路由进行权限控制
```

2.基本代码
`vue-router.md`

3.实例：路由守卫的拦截
`示例在router中的news`
```
1.当判断条件正确的时候（school 为 Tsinghua），才能看到News和Message的信息。
2.利用全局守卫来授权。


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
```

## 独享守卫的拦截
`示例在About组件中`
```
1.只对News这一个路由组件进行权限控制
2.独享守卫可以和全局守卫一起使用

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
```

## 组件内路由守卫
```
1.进入守卫：通过路由规则，进入该组件时被调用
2.离开守卫：通过路由规则，离开该组件时被调用

基本语法
//进入守卫
beforeRouterEnter(to,from,next){...}
//离开守卫
beforeRouterLeave(to,from,next){...}
```

```
组件内守卫可以和其他守卫一起用
```
## sourcelink
`https://blog.csdn.net/qq_45902692/article/details/124967072`


### 其他
`router-view`
```
为什么子router-view和孙router-view作为容器显示的组件没有错乱，比如显示在孙router-view的组件没有显示在子router-view?
router-view的显示依赖路由的注册，
{
	path:’/home’,
	component:Home,
	children:[
	 	path:’/son’,
		name:’son’
		component:Sone,
		children:[
			path:’/grandSon’,
			name:’grandSon’,
			component:GrandSon
		]	
	]
}
Son一定是显示在Home的router-view,Son是Home的children
GrandSon一定显示在Son的router-view,GrandSon是Son的children，
所以子组件显示的router-view位置一定不会错（和path、name没有关系，只和children有关系）
```

`children 子路由 嵌套路由`
```
        {
            path: '/home',
            component: Home,
            children: [ //通过children配置子级路由（嵌套路由），子路由所有组件显示在父级上，也就是父级组件中的<router-view/>
                // {
                //     // path:'',//等同于 path:'/home'
                //     // component:Homehome,
                //     // path:'test',//此处没有 /  相对路径 访问地址为localhost:8080/home/test
                //     path:'/test',//此处有 /  访问地址为localhost:8080/test
                //     component:test,
                // },
```