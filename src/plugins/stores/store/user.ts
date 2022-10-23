import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { UsernamePassword, UserInfo } from "@/types";
import api from "@/api";

export const useUserStore = defineStore(StoreNameEnum.User, {
  state: () => ({
    userState: {
      authorized: false,
      token: "",
      userInfo: {} as UserInfo,
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
      let userINfo: UserInfo = await this.getUserInfo();
      this.userState.userInfo = userINfo;
    },
    async unauthorized() {
      this.userState.authorized = false;
      this.userState.token = "";
      this.userState.userInfo = {};
    },
    async getUserInfo() {
      let res = await api.user.getUserInfo();
      return res.data;
    },
  },
});
