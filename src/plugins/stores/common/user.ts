import { defineStore } from "pinia";

interface UserState {
  /**
   * 用户是否已认证
   */
  authorized: boolean;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userState: {
      authorized: false,
    },
    count: 1,
  }),
  // persist: true,  开启数据持久化，所有store数据将被持久化到指定仓库
  persist: {
    // 自定义数据持久化方式
    //key: "userState", // 指定key进行存储，此时非key的值不会持久化，刷新就会丢失
    storage: window.sessionStorage, // 指定换成地址
    paths: ["userState"], // 指定需要持久化的state的路径名称
  },
  actions: {
    onAuth() {
      this.userState.authorized = true;
      this.count = 999;
    },
  },
});
