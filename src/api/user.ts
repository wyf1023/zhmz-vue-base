import { UsernamePassword, TokenResult } from "@/types";
import { request } from "@/utils";

enum Url {
  ACCOUNT_LOGIN = "/auths/login",
}

/**
 * 用户接口
 */
export interface IUser {
  accountLogin: (data: UsernamePassword) => Promise<any>;
}

class User implements IUser {
  /**
   * 账户登录
   * @param data
   */
  accountLogin(data: UsernamePassword): Promise<TokenResult> {
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
}

export default User;
