/* * @Author: wuyefan * @Date: 2022-10-14 10:11:41 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:41 */
<template>
  <div class="main">
    <div class="main-header-breadcrumb-container">
      <MainBreadcrumb />
    </div>
    <div class="main-content">
      <MainContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBreadcrumb from "@/layouts/main/components/main-breadcrumb.vue";

import MainContent from "@/layouts/main/components/main-content.vue";
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  .main-header-breadcrumb-container {
    height: 40px;
    border: 1px dashed var(--el-menu-border-color);
    display: flex;
    align-items: center;
  }
  .main-content {
    height: 30px;
    flex-grow: 1;
    margin-top: 3px;
  }
}
</style>
