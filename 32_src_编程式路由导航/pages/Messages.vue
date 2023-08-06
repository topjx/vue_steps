<template>
    <div>
        <ul>
            <li v-for="item in messageList" :key="item.id">
                <!-- 跳转路由并携带query参数，to的字符串写法,查询参数使用query -->
                <!-- <router-link :to="'/home/message/detail?id=' + item.id + '&title=' + item.title">{{ item.title }}</router-link> -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- <router-link :to="{path: '/home/message/detail', query: {id: item.id, title: item.title}}">{{ item.title }}</router-link> -->

                <!-- router-link标签的to属性可以是一个对象，对象中的name属性值是路由的名称，query属性值是一个对象，对象中的id属性值是消息的编号，title属性值是消息的标题 -->
                <!-- <router-link :to="{name: 'MessageDetail', query: {id: item.id, title: item.title}}">{{ item.title }}</router-link> -->

                <!-- 跳转并携带params参数，to的字符串写法 查询参数使用params-->
                <!-- <router-link :to="`/home/message/detail/${ item.id }/${ item.title }`">{{ item.title }}</router-link> -->

                <!-- 跳转并携带params参数，to的对象写法 -->
                <!-- <router-link :to="{ name: 'MessageDetail', params: { id: item.id, title: item.title } }">{{ item.title
                }}</router-link> -->

                <!-- replace 替换 -->
                <!-- <router-link replace="true" :to="{ name: 'MessageDetail', params: { id: item.id, title: item.title } }"
                    >{{ item.title }}</router-link> -->

                <div>item.id :{{ item.id }}</div>
                <div>item.title :{{ item.title }}</div>
                
                <button @click="push(item)">push</button>
                <button @click="replace(item)">replace</button>
                <button @click="forward">forward</button>
                <button @click="back">back</button>
                <button @click="go">go</button>
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "MessagesView",
    data() {
        return {
            messageList: [
                { id: 1, title: "message001" },
                { id: 2, title: "message002" },
                { id: 3, title: "message003" },
            ]
        };
    },
    methods: {
        push({ id, title }) {
            // this.$router.push('/home/message/detail', { id: 4, title: 'message004' });
            this.$router.push({ name: 'MessageDetail', params: { id: id, title: title } });
        },
        replace({ id, title }) {
            // this.$router.replace('/home/message/detail', { id: 4, title: 'message004' });
            this.$router.replace({ name: 'MessageDetail', params: { id: id, title: title } });
        },
        forward() {
            this.$router.forward();
            // this.$router.go(1);
        },
        back() {
            this.$router.back();
            // this.$router.go(-1);
        },
        go() {
            this.$router.go(2);
        }
    }
}
</script>

<style></style>