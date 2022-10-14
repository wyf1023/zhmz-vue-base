/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <el-tabs
    v-model="editableTabsValue"
    type="border-card"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane label="首页" name="tab1">
      <router-view></router-view
    ></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const editableTabsValue = ref("tab1");

const removeTab = (targetName: string) => {};
</script>

<style lang="less" scoped>
.el-tabs {
  height: 100%;
}
</style>
