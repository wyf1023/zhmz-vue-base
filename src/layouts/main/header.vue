/* * @Author: wuyefan * @Date: 2022-10-13 16:38:41 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-13 16:38:41 */
<template>
  <div class="el-header-container">
    <div class="el-header-logo">
      <div class="el-header-logo-font">
        {{ sysName }}
      </div>
    </div>
    <div class="el-header-userbar">
      <HeaderToolbar user-name="管理员" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderToolbar from "./components/header-avatar-toolbar.vue";
const sysName = import.meta.env.APP_SYS_NAME;
</script>
<style lang="less" scoped></style>
