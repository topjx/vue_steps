## vue-router 是什么？
```
vue-router是vue的一个插件库，专门用来实现SPA应用。
```

## SPA是什么？
```
1.单页web应用（Single page web application,SPA）.
2.整个应用只有一个完整的页面。
3.点击页面中的导航链接不会刷新页面，只会刷新页面的局部更新。
4.数据需要通过ajax请求获取。
```

## 路由的理解
1.什么是路由？
```
1.一个路由就是一组映射关系（key-value）
2.key为路径，value可能是`function`或`component`
```
2.路由的分类
```
1.后端路由：
（1）理解：value是function，用于处理客户端提交的请求。
（2）工作过程：服务器收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。
2.前端路由：
（1）理解：value是component，用于展示页面的内容。
（2）工作过程：当浏览器的路径改变时，对应的组件就会展示。
```

## 路由的基本使用
1.安装vue-router
```
在终端键入：npm i vue-router@3
对应的是vue2.x版本
```

2.应用插件
```
Vue.use(VueRouter)
```

3.编写router配置项
	// 该文件专门用于创建整个应用的路由器
	import VueRouter from "vue-router";
	// 引入组件
	import About from '../components/About.vue'
	import Home from '../components/Home.vue'
	
	// 创建并暴露一个路由器
	export default new VueRouter({
	  routes: [
	    {
	      path: '/about',
	      component: About
	    },
	    {
	      path: '/home',
	      component: Home
	    },
	  ]
	})

4. 实现切换（active-class可配置高亮样式）
```
active-class 是 vue-router 模块的 router-link 组件中的属性，用来做选中样式的切换

点击哪个导航栏哪个导航栏高亮
```

5. 指定展示位置
```
指定在页面中展示的位置
	<router-view></router-view>
```

## 几个注意点
1.路由组件通常放在`pages`文件夹，一般组件通常放在`components`文件夹
2.通过切换，隐藏了路由组件，默认是被`销毁`的，需要的时候再去挂载
3.每个组件都有自己的`$route`属性，里面存储着自己的路由信息
4.整个应用只有一个`router`，可以通过`$router`属性获取
5.有<router-link>，一定有<router-view>配对出现，需要承载component