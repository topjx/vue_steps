## slot

`srclink https://blog.csdn.net/qq_45902692/article/details/124850937`
### 总结
```
插槽用来父组件和子组件之间的传值

Father.vue
<div>
    <Son>
        <div>传入子组件的元素、控件</div>
    </Son>
</div>

Son.vue
<div>
    <slot></slot>//传入的元素空间显示在这个位置
</div>
```

1.插槽的作用
```
1.让父组件可以向子组件指定位置插入`html`结构，也是一种组件间的通信方式。
2.适用于：`父组件 => 子组件`
```

2.插槽的分类
```
1.默认插槽
2.具名插槽
3.作用域插槽
```

### 默认插槽
1.语法
```
父组件中：定义`html`结构
```
<Category>
    <div>html结构1</div>
</Category>

```
子组件中：使用`<slot>`标签，标签内容为默认内容（即不传入具体结构时显示）
```
	<template>
        <div>
            <!-- 定义插槽 -->
            <slot>插槽默认内容...</slot>
        </div>
    </template>

2.实例：呈现三种html内容
```
`Category.vue`（子组件）
1.使用插槽，呈现父组件中的内容
2.注：其实使用props和v-show也可以实现，但是配置的较为繁琐
```

	<template>
	  <div class="category">
	    <h3>{{ title }}分类</h3>
	    <slot>没有传递具体结构时，我会出现</slot>
	  </div>
	</template>
	
	<script>
	export default {
	  name: "myCategory",
	  props: ["title"],
	};
	</script>
	
	<style scoped>
	.category {
	  background-color: skyblue;
	  height: 300px;
	  width: 200px;
	}
	h3 {
	  text-align: center;
	  background-color: orange;
	}
	img {
	  width: 100%;
	}
	</style>

```
`App.vue`(父组件)
1.在data中准备好要使用的数据
2.在第一个标签中传入图片、第二个标签输出数据、第三个标签中传入视频
```

	<template>
	  <div class="container">
	    <Category title="美食">
	      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"/>
	    </Category>
	
	    <Category title="游戏">
	      <ul>
	        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
	      </ul>
	    </Category>
	
	    <Category title="电影">
	      <video
	        controls
	        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
	      ></video>
	    </Category>
	  </div>
	</template>
	
	<script>
	import Category from "./components/Category.vue";
	export default {
	  name: "App",
	  components: { Category },
	  data() {
	    return {
	      foods: ["火锅", "烧烤", "小龙虾", "西瓜"],
	      games: ["王者荣耀", "APEX", "超级玛丽"],
	      films: ["《活着》", "《超能陆战队》", "《寻梦环游记》", "《扬名立万》"],
	    };
	  },
	};
	</script>
	
	<style scoped>
	.container {
	  display: flex;
	  justify-content: space-around;
	}
	video {
	  width: 100%;
	}
	</style>

### 具名插槽
1.语法规范
```
父组件中：定义`html`结构，并给不同的插槽`name`命名。这样可以对应的使用多个插槽。
```

	<Category>
        <template slot="center">
            <div>html结构1</div>
        </template>
        
        <template v-slot="footer">
            <div>html结构1</div>
        </template>
    </Category>


```
子组件中：使用`<slot>`标签，标签内容为默认内容（即不传入具体结构时显示）。里面的`name`对应父组件中对应的值
```

	<template>
        <div>
            <slot name="center">默认插槽内容...</slot>
            <slot name="footer">默认插槽内容...</slot>
        </div>
    </template>

2.实例：呈现三种html内容（多个插槽）
```
`Category.vue`（子组件）
1.使用插槽，呈现父组件中的内容
2.每一个插槽都有特定的名字
```

	<template>
	  <div class="category">
	    <h3>{{ title }}分类</h3>
	    <slot name="center">没有传递具体结构时，我会出现</slot>
	    <slot name="footer">没有传递具体结构时，我会出现</slot>
	  </div>
	</template>
	 
	<script>
	export default {
	  name: "myCategory",
	  props: ["title"],
	};
	</script>
	
	<style scoped>
	.category {
	  background-color: skyblue;
	  height: 300px;
	  width: 200px;
	}
	h3 {
	  text-align: center;
	  background-color: orange;
	}
	img {
	  width: 100%;
	}
	</style>

```
`App.vue`父组件
1.在data中准备好要使用的数据
2.在第一个标签中传入图片、第二个标签输出数据、第三个标签中传入视频
3.并在第一个插槽下面，呈现第二个插槽对应的内容（超链接和h4文本）
```

	<template>
	  <div class="container">
	    <Category title="美食">
	      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
	      <a slot="footer" href="#">更多美食</a>
	    </Category>
	
	    <Category title="游戏">
	      <ul slot="center">
	        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
	      </ul>
	      <div class="foot" slot="footer">
	        <a href="#">单机游戏</a>
	        <a href="#">网络游戏</a>
	      </div>
	    </Category>
	
	    <Category title="电影">
	      <video
	        slot="center"
	        controls
	        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
	      ></video>
	      <template v-slot:footer>
	        <div class="foot">
	          <a href="#">经典</a>
	          <a href="#">热门</a>
	          <a href="#">推荐</a>
	        </div>
	        <h4>欢迎前来观影</h4>
	      </template>
	    </Category>
	  </div>
	</template>
	
	<script>
	// 引入组件
	import Category from "./components/Category.vue";
	export default {
	  name: "App",
	  components: { Category },
	  data() {
	    return {
	      foods: ["火锅", "烧烤", "小龙虾", "西瓜"],
	      games: ["王者荣耀", "APEX", "超级玛丽"],
	      films: ["《活着》", "《超能陆战队》", "《寻梦环游记》", "《扬名立万》"],
	    };
	  },
	};
	</script>
	
	<style scoped>
	.container,
	.foot {
	  display: flex;
	  justify-content: space-around;
	}
	video {
	  width: 100%;
	}
	h4 {
	  text-align: center;
	}
	</style>

### 作用域插槽
1.理解
```
1.数据在组件的自身，但是根据生成的结构需要组件的使用者来决定
2.在下面实例中:games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定
```
2.语法规范
```
父组件中：定义`html`结构。数据不在父组件上。
```

	<Category>
        <template>
            <ul>
                <li v-for="g in scopeData.games" :key="g">{{g}}</li>
            </ul>
        </template>
        <template>
            <ul>
                <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
            </ul>
        </template>
    </Category>

```
子组件中：使用 <slot> 标签，标签内容为默认内容（即不传入具体结构时显示）
```

```
	<template>
        <div>
            <slot :games="games"></slot>
        </div>
    </template>

    <script>
        export default {
            name: 'Category',
            props: ['title'],
            //数据在子组件自身
            data(){
                return{
                    games: ["王者荣耀", "侠盗飞车", "超级玛丽"]
                }
            }
        }
    </script>
```

2.实例：对游戏数据的三种呈现（有序、无序和h4大小）
```
`Category.vue`（子组件）
1.使用插槽，呈现父组件中的内容
2.数据放入了子组件中
3.单项数据绑定 games
```

```
	<template>
	  <div class="category">
	    <h3>{{ title }}分类</h3>
	    <slot :games="games"></slot>
	  </div>
	</template>
	
	<script>
	export default {
	  name: "myCategory",
	  props: ["title"],
	  data() {
	    return {
	      games: ["王者荣耀", "侠盗飞车", "超级玛丽"],
	    };
	  },
	};
	</script>
	
	<style scoped>
	.category {
	  background-color: skyblue;
	  height: 300px;
	  width: 200px;
	}
	h3 {
	  text-align: center;
	  background-color: orange;
	}
	img {
	  width: 100%;
	}
	</style>
```

```
`App.vue`（父组件）
1.常规写法：先 scope="demo"，再 demo.games
2.ES6+另一种常规写法写法：先 slot-scope="{games}"，直接解构 games
3.ES6+新命名方式：v-slot="games"，直接解构 games
4.3可以简写为：#:{games}
```

```
	<template>
	  <div class="container">
	    <Category title="游戏">
	      <template scope="demo">
	        <ul>
	          <li v-for="(g, index) in demo.games" :key="index">{{ g }}</li>
	        </ul>
	      </template>
	    </Category>
	    
	    <Category title="游戏">
	      <template slot-scope="{games}">
	        <ol>
	          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
	        </ol>
	      </template>
	    </Category> 
	    
	    <Category title="游戏">
	      <template v-slot="{games}">
	        <h4><li v-for="(g, index) in games" :key="index">{{ g }}</li></h4>
	      </template>
	    </Category>
	  </div>
	</template>
	
	<script>
	// 引入组件
	import Category from "./components/Category.vue";
	export default {
	  name: "App",
	  components: { Category },
	};
	</script>
	
	<style scoped>
	.container,
	.foot {
	  display: flex;
	  justify-content: space-around;
	}
	video {
	  width: 100%;
	}
	h4 {
	  text-align: center;
	}
	</style>
```
