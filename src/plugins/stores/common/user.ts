import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { UsernamePassword, TokenResult } from "@/types";
import api from "@/api";

export const useUserStore = defineStore(StoreNameEnum.User, {
  state: () => ({
    userState: {
      authorized: false,
      token: "",
    },
  }),
  persist: {
    // 自定义数据持久化方式
    storage: window.sessionStorage, // 指定换成地址
    paths: ["userState"], // 指定需要持久化的state的路径名称
  },
  actions: {
    async accountLogin(data: UsernamePassword) {
      let res = await api.user.accountLogin(data);
      this.userState.authorized = true;
      this.userState.token = res.data.token;
    },
    async unauthorized() {
      let res = await api.user.loginOut();
      if (res.succeed) {
        this.userState.authorized = false;
        this.userState.token = "";
      }
    },
  },
});
