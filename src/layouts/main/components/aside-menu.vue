/* * @Author: wuyefan * @Date: 2022-10-14 11:29:03 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:29:03 */
<template>
  <el-menu
    :default-active="onRoutes"
    @open="handleOpen"
    @close="handleClose"
    router
    background-color="transparent"
    text-color="#ffffff"
    active-text-color="#ffd04b"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><document /></el-icon>
        <span>主菜单</span>
      </template>
      <el-menu-item index="/message/list">
        <el-icon><document /></el-icon> 菜单一</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};

const onRoutes = computed(() => {
  return route.path;
});
</script>

<style lang="" scoped></style>
