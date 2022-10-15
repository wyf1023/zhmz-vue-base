/* * @Author: wuyefan * @Date: 2022-10-14 10:11:34 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:34 */
<template>
  <div class="aside-header">
    <el-image style="width: 60px; height: 30px" :src="logUrl" fit="fill" />
    <div>{{ sysTitle }}</div>
  </div>
  <el-scrollbar>
    <AsideMenu />
  </el-scrollbar>
</template>

<script setup lang="ts">
import AsideMenu from "./components/aside-menu.vue";
const logUrl = import.meta.env.APP_LOGO_URL;
const sysTitle = import.meta.env.APP_SYS_TITLE;
</script>

<style lang="less" scoped>
.el-scrollbar {
  width: 99%;
  overflow: auto;
  height: calc(100vh - 120px);
}
.el-menu {
  border-right: 0;
  text-align: center;
}

.aside-header {
  flex-shrink: 0;
  height: 120px;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-weight: 600;
  font-family: "Mircrosoft";
  color: var(--el-color-white);
  div {
    margin: 10px;
  }
}
</style>
