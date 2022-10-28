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
    <template v-for="item in menus" :key="item.id">
      <template v-if="!item.isParent">
        <el-menu-item :index="item.href">
          <el-icon><document /></el-icon> {{ item.title }}</el-menu-item
        >
      </template>
      <template v-else>
        <el-sub-menu :index="item.id" :key="item.id">
          <template #title>
            <el-icon><document /></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.href">
              <el-icon><document /></el-icon> {{ subItem.title }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, defineEmits, reactive } from "vue";
import { useRoute } from "vue-router";
import { useMenusStore } from "@/plugins/stores/store/menus";

const route = useRoute();
const permissionStore = useMenusStore();
const handleOpen = (key: string, keyPath: string[]) => {};
const handleClose = (key: string, keyPath: string[]) => {};
let menus = reactive([]);
const emits = defineEmits(["onChangeLoading"]);

permissionStore.getMenus().then((res) => {
  menus.push(...res);
  emits("onChangeLoading", false);
});

const onRoutes = computed(() => {
  return route.path;
});
</script>

<style lang="" scoped></style>
