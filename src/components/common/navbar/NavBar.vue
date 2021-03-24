<!--
 * @Author: 张锦滨
 * @Date: 2021-03-24 08:50:34
 * @LastEditTime: 2021-03-24 09:07:07
 * @Description: 导航组件
 * @FilePath: \superman\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  width: 100%;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>
