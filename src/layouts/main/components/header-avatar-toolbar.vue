/* * @Author: wuyefan * @Date: 2022-10-14 10:11:27 * @Last Modified by: wuyefan
* @Last Modified time: 2022-10-14 10:11:27 */
<template>
  <el-row justify="start" align="middle">
    <el-col :span="4" :offset="8">
      <el-avatar
        :size="30"
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
      <el-dropdown @command="onCommand">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in config"
              :key="item.id"
              :command="item.id"
              >{{ item.title }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import config from "@/configs/avatarToolbar";
import { useUserStore } from "@/plugins/stores/common/user";
import { messageBox, remindMessage } from "@/utils";
import { watch } from "vue";
import { useRouter } from "vue-router";

let userStore = useUserStore();
let router = useRouter();
const props = defineProps({
  userName: {
    type: String,
    default: "未登录",
  },
});

/**
 * 点击事件
 * @param callback
 */
let onCommand = (id: string) => { 
  if (id === "exit") {
    messageBox(remindMessage.remindQuit, function () {
      let userSotre = useUserStore();
      userSotre.unauthorized();
    });
  }
};

/**
 * 监听退出登录
 */
watch(
  () => userStore.userState.authorized,
  (authorized) => {
    if (!authorized) {
      router.push("/login");
    }
  }
);
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
