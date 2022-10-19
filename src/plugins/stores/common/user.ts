import { defineStore } from "pinia";
import { StoreNameEnum } from "@/plugins/stores";
import { UsernamePassword, TokenResult } from "@/types";
import api from "@/api";

/**
 * 用户状态
 */
interface UserState {
  /**
   * 用户是否已认证
   */
  authorized: boolean;
}

interface UserInfo {}

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
    accountLogin(data: UsernamePassword) {
      api.user
        .accountLogin(data)
        .then((res) => {
          this.userState.authorized = true;
          this.userState.token = res.token;
        })
        .catch(() => {
          this.userState.authorized = false;
          this.userState.token = "";
        });
    },
  },
});
