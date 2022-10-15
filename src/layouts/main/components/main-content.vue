/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <el-tabs
    v-model="editableTabsValue"
    type="border-card"
    :closable="false"
    @tab-remove="removeTab"
  >
    <el-tab-pane label="首页" name="tab1">
      <el-scrollbar>
        <router-view style="width: 99.5%"></router-view>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const editableTabsValue = ref("tab1");

const removeTab = (targetName: string) => {};
</script>

<style lang="less" scoped>
.el-scrollbar {
  height: calc(100vh - 130px);
}
.el-tabs {
  height: 93vh;
}
</style>
