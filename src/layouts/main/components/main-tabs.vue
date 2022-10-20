/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <el-tabs
    type="border-card"
    class="main-tabs-container"
    v-model="currentTab"
    @tab-click="onClick"
    @tab-remove="removeTab"
  >
    <template v-for="item in tabStore.tabs" :key="item.name">
      <el-tab-pane :name="item.name" :closable="item.canClose">
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
import { computed, toRefs } from "vue";
import { useTabStore } from "@/plugins/stores/store/tabs";
import { useRouter } from "vue-router";
import { TabsPaneContext } from "element-plus";

let tabStore = useTabStore();
let router = useRouter();

/**
 * 当前选中tab
 */
let currentTab = computed(() => {
  return tabStore.tabs.find((item) => item.selected).name;
});

/**
 * tab选中事件
 */
const onClick = (ctx: TabsPaneContext) => {
  let tab = tabStore.getTabByName(ctx.paneName.toString());
  router.push(tab.path);
};

/**
 * tab删除事件
 * @param targetName
 */
const removeTab = (targetName: string) => {
  const index = tabStore.tabs.findIndex((tab) => tab.name === targetName);
  const tab = tabStore.tabs[index - 1];
  router.push(tab.path);
  tabStore.removeTabs(targetName);
};
</script>

<style lang="less" scoped>
.el-tabs--border-card {
  border: none;
}
</style>
