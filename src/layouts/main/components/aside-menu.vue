/* * @Author: wuyefan * @Date: 2022-10-14 11:29:03 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:29:03 */
<template>
  <el-menu
    :default-active="state.currentPath"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    background-color="transparent"
    text-color="#ffffff"
    active-text-color="#ffd04b"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><document /></el-icon>
        <span>主菜单</span>
      </template>
      <el-menu-item index="/page1">
        <el-icon><document /></el-icon> 菜单一</el-menu-item
      >
      <el-menu-item index="/page2">
        <el-icon><document /></el-icon> 菜单二</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  currentPath: "/",
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// const { currentPath } = toRefs(state);

router.beforeEach((to, from, next) => {
  state.currentPath = to.path;
  next();
});
</script>

<style lang="" scoped></style>
