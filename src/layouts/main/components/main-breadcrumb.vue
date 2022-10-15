/* * @Author: wuyefan * @Date: 2022-10-14 11:03:08 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 11:03:08 */ /* * @Author: wuyefan * @Date:
2022-10-14 10:11:23 * @Last Modified by: wuyefan * @Last Modified time:
2022-10-14 10:11:23 */
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-left: 10px;
  display: flex;
  flex-wrap: nowrap;
}
</style>
