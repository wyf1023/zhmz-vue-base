<template>
  <div class="container">
    <div class="container__body">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="密码登录" name="first">
          <el-form
            ref="loginForm"
            label-width="80px"
            :model="formData"
            :rules="rules"
            name="test"
          >
            <el-form-item label="用户名：" prop="userName">
              <el-input
                placeholder="请输入用户名"
                v-model="formData.userName"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="passWord">
              <el-input
                placeholder="请输入密码"
                type="password"
                v-model="formData.passWord"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码：" prop="vcode">
              <el-input v-model="formData.vcode"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="onLogin(loginForm)"
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
import { ref, reactive } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "@/plugins/stores/common/user";

let activeName = "first";
let router = useRouter();
const userStore = useUserStore();
const loginForm = ref<FormInstance>();

const formData = reactive({
  userName: "",
  passWord: "",
  vcode: "",
});

/**
 * 登录
 */
const onLogin = async function (formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      userStore.onAuth();
      router.push("/");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const rules = reactive<FormRules>({
  userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  passWord: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
  vcode: [
    {
      required: false,
      message: "验证码不能为空",
      trigger: "blur",
    },
  ],
});

const handleClick = (tab: TabsPaneContext, event: Event) => {};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background-color: #0984e3;
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
