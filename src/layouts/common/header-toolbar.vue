<template>
  <el-row justify="start" align="middle">
    <el-col :span="8" :offset="8">
      <el-avatar
        :size="40"
        src="../../../public/images/layouts/header.png"
      ></el-avatar>
    </el-col>
    <el-col :span="6"
      ><span>{{ props.userName }}</span></el-col
    >
    <el-col :span="1" :pull="1">
      <el-icon><CaretBottom /></el-icon
    ></el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  userName: {
    type: String,
    default: "未登录",
  },
});
</script>

<style lang="less" scoped>
span {
  font-family: "Mircrosoft Yahei";
  font-size: 16px;
  cursor: pointer;
}
.el-icon {
  cursor: pointer;
}
</style>
