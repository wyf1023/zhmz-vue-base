/* * @Author: wuyefan * @Date: 2022-10-14 10:11:41 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:41 */
<template>
  <!-- <div class="main">
    <div class="main-header-breadcrumb-container">
      <MainBreadcrumb />
    </div>

  </div> -->
  <div class="main-content">
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import MainContent from "@/layouts/main/components/main-content.vue";
</script>

<style lang="less" scoped>
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px;
}
</style>
