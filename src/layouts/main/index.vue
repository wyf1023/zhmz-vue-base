/* * @Author: wuyefan * @Date: 2022-10-14 10:11:39 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:39 */
<template>
  <div>
    <el-container class="common-layout">
      <el-container>
        <el-aside>
          <AsideComponent />
        </el-aside>
        <el-container>
          <el-header>
            <HeaderComponent />
          </el-header>
          <el-main>
            <MainComponent />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./header.vue";
import AsideComponent from "./aside.vue";
import MainComponent from "./main.vue";
import { useDynamicRoutersStore } from "@/plugins/stores/store/routers";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

let router = useRouter();
let dynamicRouters = useDynamicRoutersStore();
/**
 * 动态路由加载
 */

onMounted(() => {
  dynamicRouters.BuildDynamicRouters(router).then(() => {
    console.log("router loaded!", router.getRoutes());
  });
});
</script>

<style lang="less" scoped></style>
