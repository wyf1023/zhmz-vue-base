/* * @Author: wuyefan * @Date: 2022-10-13 16:38:41 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-13 16:38:41 */
<template>
  <el-row justify="center" align="middle" style="flex: 1">
    <el-col :span="1">
      <el-image :src="logUrl" fit="fill" />
    </el-col>
    <el-col :span="5"
      ><span class="header__div--logo-font">{{ sysName }}</span>
    </el-col>
    <el-col :offset="16" :span="2"><HeaderToolbar user-name="测试" /></el-col>
  </el-row>
</template>

<script setup lang="ts">
import HeaderToolbar from "../common/header-toolbar.vue";
const sysName = import.meta.env.APP_SYS_NAME;
const logUrl = import.meta.env.APP_LOGO_URL;
</script>

<style lang="less" scoped></style>
