<template>
  <div class="container">
    <div class="container__body">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="密码登录" name="first">
          <el-form ref="form" label-width="80px">
            <el-form-item label="用户名：">
              <el-input
                placeholder="请输入用户名"
                v-model="loginName"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="passWord"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码：">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="onSubmit"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="secend"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const activeName = ref("first");
const state = reactive({
  loginName: "",
  passWord: "",
});

const { loginName, passWord } = toRefs(state);

const onSubmit = function () {
  router.push("/home");
};

const handleClick = (tab: TabsPaneContext, event: Event) => {};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background-color: #1dd1a1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__body {
  width: 350px;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #bdc3c7;
  padding: 30px;
}
</style>
