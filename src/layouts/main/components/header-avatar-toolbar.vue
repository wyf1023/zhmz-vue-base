/* * @Author: wuyefan * @Date: 2022-10-14 10:11:27 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:27 */
<template>
  <el-row justify="start" align="middle">
    <el-col :span="5" :offset="7">
      <el-avatar
        :size="40"
        src="/images/layouts/header.png"
        fit="fill"
      ></el-avatar>
    </el-col>
    <el-col :span="10">
      <div class="user">
        <span>{{ props.userName }}</span>
        <br />
        <span>欢迎光临</span>
      </div>
    </el-col>
    <el-col :span="2">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in config.avatarToolBar"
              :key="item.id"
              >{{ item.title }}</el-dropdown-item
            >
            <el-dropdown-item> 退出系统 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import config from "@/global/configs/config";

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
  font-size: 15px;
}
.el-dropdown {
  cursor: pointer;
  color: white;
}
.user {
  text-align: center;
}
</style>
