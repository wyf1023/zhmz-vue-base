<template>
  <div>
    <el-container class="common-layout">
      <el-container>
        <el-aside>
        </el-aside>
        <el-container>
          <el-header>
            <HeaderComponent />
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./header.vue";
import AsideComponent from "./aside.vue";
const props = defineProps({
  menus: [],
});
</script>

<style lang="less" scoped></style>
