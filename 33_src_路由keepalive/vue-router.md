## 缓存路由组件
1.作用
```
默认情况下，不展示的路由组件是会自动销毁的，缓存路由组件就是让不展示的路由组件保持挂载，不被销毁
```

2.具体代码
```
使用<keep-alive>标签，注意是写在用于缓存的组件里。

include="news" 表示只对name为`news`的组件进行缓存，`news`是定义News组件的name名。

如果不在`<keep-alive>`中配置include属性，那么Home组件中展示的所有路由都会缓存。
通过`include='XXX'`,可以指定要缓存的路由。‘include=['a','b']’
```

3.两个新的生命周期钩子
```
路由组件所`独有`的两个钩子，用于捕获路由组件的激活状态。

`activated`路由组件被`激活时`触发
`deactivated`路由组件`失活时`触发
```


## srclink
`https://blog.csdn.net/qq_45902692/article/details/124954818`