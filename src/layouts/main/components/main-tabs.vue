/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <div class="tabClose">
    <el-dropdown @command="onCommand">
      <span class="el-dropdown-link">
        <el-image
          style="width: 20px; height: 20px"
          src="/images/layouts/downpane.png"
          :fit="`fit`"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <el-tabs
    type="border-card"
    class="main-tabs-container"
    v-model="currentTab"
    @tab-click="onClick"
    @tab-remove="removeTab"
  >
    <template v-for="item in tabStore.tabs" :key="item.name">
      <el-tab-pane :name="item.name" :closable="item.close">
        <template #label>
          <span class="custom-tabs-label">
            <!-- <el-icon><HomeFilled /></el-icon> -->
            <span>{{ item.title }}</span>
          </span>
        </template>

        <slot></slot>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTabStore } from "@/plugins/stores/store/tabs";
import { useRouter, useRoute } from "vue-router";
import { TabsPaneContext } from "element-plus";
import { RouteNameEnum } from "@/configs/enums";

let tabStore = useTabStore();
let router = useRouter();
let route = useRoute();
/**
 * 当前选中tab
 */
let currentTab = computed(() => {
  return route.name;
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
  //删除tab，选中前一个tab;
  const index = tabStore.tabs.findIndex((tab) => tab.name === targetName);
  const tab = tabStore.tabs[index - 1];
  router.push(tab.path);
  tabStore.removeTabByName(targetName);
};

const onCommand = (command: string) => {
  tabStore.removeCustomTabs(route.name.toString(), command);

  /**
   *  点击首页tab
   */
  if (command === "all") {
    router.push({ name: RouteNameEnum.HOMEPAGE });
  }
};
</script>

<style lang="less" scoped>
.el-tabs--border-card {
  border: none;
}

.tabClose {
  position: absolute;
  height: 30px;
  width: 30px;
  z-index: 999;
  right: 10px;
  padding-top: 8px;
  cursor: pointer;
}
</style>
