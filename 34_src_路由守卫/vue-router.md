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