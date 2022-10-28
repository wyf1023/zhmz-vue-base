<template>
  <div class="exception">
    <el-result
      icon="warning"
      title="404错误"
      sub-title="温馨提示：您访问的页面不存在！"
    >
    </el-result>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.exception {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>
