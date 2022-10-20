/*
 * @Author: wuyefan
 * @Date: 2022-10-20 21:04:29
 * @Last Modified by:   wuyefan
 * @Last Modified time: 2022-10-20 21:04:29
 */
import { UsernamePassword, RspParams } from "@/types";
import { request } from "@/utils";

enum Url {
  ACCOUNT_LOGIN = "/auths/login",

  LOGIN_OUT = "/auths/logout",

  GET_USER_INFO = "/auths/authenticated",
}

/**
 * 用户接口
 */
export interface IUser {
  accountLogin: (data: UsernamePassword) => Promise<any>;
  getUserInfo: () => Promise<RspParams>;
}

class User implements IUser {
  /**
   * 账户登录
   * @param data
   */
  async accountLogin(data: UsernamePassword): Promise<RspParams> {
    const options = {
      method: "post",
      data: {
        captcha: data.captcha,
        captchaKey: data.captchaKey,
        username: data.username,
        password: data.password,
      },
    };

    return request(Url.ACCOUNT_LOGIN, options);
  }

  /**
   * 账户退出
   */
  async loginOut(): Promise<RspParams> {
    let res = await request(Url.LOGIN_OUT);
    return res;
  }

  /**
   * 获取用户信息
   * @returns
   */
  async getUserInfo(): Promise<RspParams> {
    let res = await request(Url.GET_USER_INFO);
    return res;
  }
}

export default User;
