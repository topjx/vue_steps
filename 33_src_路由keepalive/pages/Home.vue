<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- include="MessagesView" -->
      <!-- :include="['MessagesView', 'NewsView']" -->
      <!-- 如果不在 <keep-alive> 中配置 include 属性，那么 Home 组件中展示的所有路由都会缓存。 -->
      <keep-alive :include="['MessagesView', 'NewsView']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

}
</script>

<style></style>