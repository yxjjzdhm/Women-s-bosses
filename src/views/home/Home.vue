<!--
 * @Author: 哎呀妈呀脑瓜疼
 * @LastEditTime: 2021-03-24 09:07:55
 * @Description: 主页
-->
<template>
  <div>
    <nav-bar class="navbar-box">
      <div slot="center">女装大佬</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="less">
.navbar-box {
  color: #fff;
  font-weight: bold;
  background-color: #ff8e97;
}
</style>
