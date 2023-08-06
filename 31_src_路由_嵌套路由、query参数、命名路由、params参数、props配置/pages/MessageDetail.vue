<template>
    <div>
        <ul>
            <!-- <li>消息编号：{{ $route.query.id }}</li>
            <li>消息标题：{{ $route.query.title }}</li> -->
            <li>消息编号：{{ $route.params.id }}</li>
            <li>消息标题：{{ $route.params.title }}</li>

            <li>props a:{{ a }}</li>
            <li>props b:{{ b }}</li>
            <li>props id:{{ id }}</li>
            <li>props title:{{ title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MessageDetailView",
    props:['a','b','id','title'],
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style></style>