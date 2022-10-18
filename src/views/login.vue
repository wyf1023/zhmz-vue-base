<template>
  <div class="container">
    <div class="container__body">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="密码登录" name="userlogin">
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
            <el-form-item
              label="验证码："
              prop="captcha"
              v-if="captcha == 'true'"
            >
              <div class="login-captcha">
                <el-input v-model="formData.captcha"></el-input>
                <el-image
                  class="login-captcha-image"
                  style="width: 90px"
                  :src="imgbase64"
                  fit="fit"
                  @click="onLoadCaptcha"
                />
              </div>
            </el-form-item>
          </el-form>
          <div class="login-button">
            <el-button type="primary" @click.prevent="onClick(loginForm)"
              >登录</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="secend"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "@/plugins/stores/common/user";
import { request } from "@/utils/request";
import { notificationMsg } from "@/utils/notification";
import { notificationType } from "@/utils/common/notificationType";
import { remindMessage } from "@/utils/common/message";
import { sm2 } from "sm-crypto";

let activeName = "userlogin";
let router = useRouter();
const userStore = useUserStore();
const loginForm = ref<FormInstance>();

const formData = reactive({
  userName: "",
  passWord: "",
  captcha: "",
  captchaKey: "",
});
let imgbase64 = ref("");
let captcha = import.meta.env.APP_CAPTCHA;

console.log(captcha);

/**
 * 登录事件
 */
const onClick = async function (formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      onLogin();

      // userStore.onAuth();
      // router.push("/");
    } else {
      notificationMsg(notificationType.error, remindMessage.require);
    }
  });
};

/**
 * 登录函数
 */
const onLogin = async () => {
  const res = await request("/auths/login_sm2", {
    method: "post",
    data: {
      captcha: formData.captcha,
      captchaKey: formData.captchaKey,
      username: formData.userName,
      password: sm2Encrpt(formData.passWord),
    },
  });

  console.log(res);
};

/**
 * sm2加密
 */
const sm2Encrpt = (psd) => {
  let publicKey =
    "0495f30a0752abe637302c243c91d854ae1c5acce7c03698024c60288c3b4a071cd32f67386c948c671f399c7db0c6875c16b603ed24df2ce08ea5ad50a3246e46";
  return sm2.doEncrypt(psd, publicKey, 1);
};

/**
 * 生成验证码
 */
const onLoadCaptcha = async () => {
  const res = await request("/captcha?" + Math.random(), {
    method: "get",
  });
  imgbase64.value = res.captchaImageBase64;
  formData.captchaKey = res.captchaKey;
};

/**
 * 加载验证码
 */
if (captcha == "true") {
  onLoadCaptcha();
}

/**
 * 验证规则
 */
const rules = reactive<FormRules>({
  userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  passWord: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
  captcha: [
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

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #bdc3c7;
  padding: 30px;
  display: flex;
  align-items: center;
  div {
    flex: 1;
  }
}

.login-captcha {
  display: flex;
  .login-captcha-image {
    margin-left: 10px;
    cursor: pointer;
  }
}

.login-button {
  width: 100%;
  text-align: center;
  .el-button {
    width: 170px;
  }
}
</style>
