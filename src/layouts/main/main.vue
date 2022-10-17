/* * @Author: wuyefan * @Date: 2022-10-14 10:11:41 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:41 */
<template>
  <div class="main-content">
    <MainTabs>
      <el-scrollbar>
        <!-- <transition> -->
        <!-- <keep-alive> -->
        <router-view class="router-view"></router-view>
        <!-- </keep-alive> -->
        <!-- </transition> -->
      </el-scrollbar>
    </MainTabs>
  </div>
</template>

<script setup lang="ts">
import MainTabs from "@/layouts/main/components/main-tabs.vue";
</script>

<style lang="less" scoped>
.main-content {
  width: 99.5%;
  border: 1px solid var(--el-border-color);
}
.el-scrollbar {
  height: calc(100vh - 140px);
}
.router-view {
  width: 99.5%;
}
</style>
