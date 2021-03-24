<!--
 * @Author: 张锦滨
 * @Date: 2021-03-23 17:20:44
 * @LastEditTime: 2021-03-24 09:04:25
 * @Description: 
 * @FilePath: \superman\src\App.vue
-->
<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
