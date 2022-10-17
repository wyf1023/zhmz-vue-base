/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <el-tabs type="border-card" class="main-tabs-container" v-model="currentPath">
    <template v-for="item in tabs" :key="item.name">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><HomeFilled /></el-icon>
            <span>{{ item.title }}</span>
          </span>
        </template>
        <slot></slot>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useTabStore } from "@/stores/common/tabs";

let currentPath;
let tabStore = useTabStore();
let route = useRoute();
let { tabs } = toRefs(tabStore);

computed(() => {
  currentPath = ref(route.path);
});
</script>

<style lang="less" scoped>
.el-tabs--border-card {
  border: none;
}
</style>
