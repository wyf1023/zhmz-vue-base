/* * @Author: wuyefan * @Date: 2022-10-14 10:11:34 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:34 */
<template>
  <div class="aside-header-font">
    <div>{{ depName }}</div>
    <div>{{ sysTitle }}</div>
  </div>
  <el-scrollbar><AsideMenu /> </el-scrollbar>
</template>

<script setup lang="ts">
import AsideMenu from "./components/aside-menu.vue";

const depName = import.meta.env.APP_DEPARTMENT_NAME;
const sysTitle = import.meta.env.APP_SYS_TITLE;
</script>

<style lang="less" scoped>
.el-scrollbar {
  flex-grow: 1;
  width: 100%;
}
.el-menu {
  border-right: 0;
}

.aside-header-font {
  height: 130px;
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
